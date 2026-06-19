"""
AI Prompt Service for generating vocabulary data with ChatGPT/Gemini.
Provides prompt generation and AI response parsing utilities.
"""
import json
import re
import urllib.parse


class AIPromptService:
    """Service for generating AI prompts and parsing AI responses for vocabulary data."""
    
    CHATGPT_BASE_URL = 'https://chat.openai.com'
    GEMINI_BASE_URL = 'https://gemini.google.com'
    
    @staticmethod
    def generate_vocab_prompt(words_text: str, target_language: str = 'vi') -> str:
        """
        Generate a prompt for AI to create vocabulary flashcard data.
        
        Args:
            words_text: Newline-separated list of English words/phrases.
            target_language: Target language for translations ('vi' or 'en').
        
        Returns:
            A formatted prompt string ready to send to an AI.
        """
        lang_name = 'Vietnamese' if target_language == 'vi' else 'English'
        definition_field = f'definition_{target_language}'
        
        prompt = f"""I need you to create vocabulary flashcard data for the following English words/phrases. For each word, provide the information in this exact JSON format:

[{{
  "term": "the word",
  "ipa": "/phonetic transcription/",
  "part_of_speech": "noun/verb/adj/adv/etc",
  "definition_en": "English definition",
  "definition_vi": "Vietnamese meaning",
  "example_sentences": [
    "Example sentence 1 using the word.",
    "Example sentence 2 using the word."
  ],
  "synonyms": ["syn1", "syn2"],
  "antonyms": ["ant1", "ant2"],
  "collocations": ["common collocation 1", "common collocation 2"],
  "context_paragraph": "A short paragraph (3-4 sentences) that uses the word naturally in context."
}}]

Here are the words:
{words_text}

Please generate complete, accurate data for ALL words listed above. Output ONLY the JSON array, no other text."""
        return prompt
    
    @staticmethod
    def get_redirect_url(provider: str, prompt: str) -> str:
        """
        Generate a redirect URL to open the AI provider with the prompt.
        
        Args:
            provider: 'chatgpt' or 'gemini'.
            prompt: The prompt text.
        
        Returns:
            URL string to redirect the user to.
        """
        encoded = urllib.parse.quote(prompt)
        if provider == 'chatgpt':
            return f"https://chat.openai.com/?q={encoded}"
        elif provider == 'gemini':
            return f"https://gemini.google.com/app?q={encoded}"
        return ''
    
    @staticmethod
    def parse_ai_result(json_text: str) -> list:
        """
        Parse AI response text and extract vocabulary JSON data.
        
        Handles cases where the AI wraps JSON in markdown code blocks
        or includes extra text around the JSON.
        
        Args:
            json_text: Raw text response from the AI.
        
        Returns:
            List of word dictionaries.
        
        Raises:
            ValueError: If no valid JSON array is found.
        """
        # Strip markdown code block markers
        cleaned = json_text.strip()
        cleaned = re.sub(r'^```(?:json)?\s*', '', cleaned)
        cleaned = re.sub(r'\s*```$', '', cleaned)
        
        # Try direct parse first
        try:
            result = json.loads(cleaned)
            if isinstance(result, list):
                return result
        except json.JSONDecodeError:
            pass
        
        # Try to extract JSON array from the text
        json_match = re.search(r'\[.*\]', cleaned, re.DOTALL)
        if json_match:
            try:
                result = json.loads(json_match.group())
                if isinstance(result, list):
                    return result
            except json.JSONDecodeError:
                pass
        
        raise ValueError('Could not parse AI response as a JSON array of words.')
