"""
Views for AI-powered vocabulary generation.
"""
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from vocab.models import Deck, Word, CardReview
from .services import AIPromptService


class GeneratePromptView(APIView):
    """
    POST /api/ai/generate-prompt/
    
    Generate an AI prompt from a list of words.
    Returns the prompt text and optional redirect URLs for ChatGPT/Gemini.
    
    Payload:
    {
        "words": "word1\\nword2\\nword3",
        "target_language": "vi",
        "provider": "chatgpt"  // optional: "chatgpt" or "gemini"
    }
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        words_text = request.data.get('words', '').strip()
        target_language = request.data.get('target_language', 'vi')
        provider = request.data.get('provider', '')
        
        if not words_text:
            return Response(
                {'error': 'Please provide a list of words (newline-separated).'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        service = AIPromptService()
        prompt = service.generate_vocab_prompt(words_text, target_language)
        
        response_data = {
            'prompt': prompt,
            'word_count': len([w for w in words_text.split('\n') if w.strip()]),
        }
        
        if provider:
            redirect_url = service.get_redirect_url(provider, prompt)
            response_data['redirect_url'] = redirect_url
        
        return Response(response_data)


class ParseAIResultView(APIView):
    """
    POST /api/ai/parse-result/
    
    Parse AI response text and create Word objects in a specified deck.
    
    Payload:
    {
        "deck_id": 1,
        "ai_response": "<JSON text from AI>"
    }
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        deck_id = request.data.get('deck_id')
        ai_response = request.data.get('ai_response', '').strip()
        
        if not deck_id:
            return Response(
                {'error': 'deck_id is required.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        if not ai_response:
            return Response(
                {'error': 'ai_response is required.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        # Validate deck
        try:
            deck = Deck.objects.get(id=deck_id, user=request.user)
        except Deck.DoesNotExist:
            return Response(
                {'error': 'Deck not found or does not belong to you.'},
                status=status.HTTP_404_NOT_FOUND,
            )
        
        # Parse AI response
        service = AIPromptService()
        try:
            words_data = service.parse_ai_result(ai_response)
        except ValueError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        # Create words
        created = []
        skipped = []
        errors = []
        
        VALID_POS = ['noun', 'verb', 'adj', 'adv', 'prep', 'conj', 'pron', 'det', 'interj', 'phrase', 'idiom']
        
        for word_data in words_data:
            term = word_data.get('term', '').strip()
            if not term:
                continue
            
            # Skip duplicates
            if Word.objects.filter(user=request.user, deck=deck, term=term).exists():
                skipped.append(term)
                continue
            
            try:
                pos = word_data.get('part_of_speech', 'noun').lower()
                if pos not in VALID_POS:
                    pos = 'noun'
                
                word = Word.objects.create(
                    user=request.user,
                    deck=deck,
                    term=term,
                    ipa=word_data.get('ipa', ''),
                    part_of_speech=pos,
                    definition_en=word_data.get('definition_en', ''),
                    definition_vi=word_data.get('definition_vi', ''),
                    example_sentences=word_data.get('example_sentences', []),
                    collocations=word_data.get('collocations', []),
                    synonyms=word_data.get('synonyms', []),
                    antonyms=word_data.get('antonyms', []),
                    context_paragraph=word_data.get('context_paragraph', ''),
                )
                # Create CardReview for spaced repetition
                CardReview.objects.get_or_create(
                    user=request.user,
                    word=word,
                    defaults={'status': 'new'},
                )
                created.append(term)
            except Exception as e:
                errors.append({'term': term, 'error': str(e)})
        
        return Response({
            'message': f'Successfully imported {len(created)} words from AI response.',
            'created': created,
            'skipped': skipped,
            'errors': errors,
        }, status=status.HTTP_201_CREATED)
