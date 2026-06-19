import os
import random
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from vocab.models import Folder, Deck, Word

User = get_user_model()

class Command(BaseCommand):
    help = 'Seeds the database with initial test data'

    def handle(self, *args, **options):
        # Create a test user
        user, created = User.objects.get_or_create(username='demo', defaults={'email': 'demo@example.com'})
        if created:
            user.set_password('demo1234')
            user.save()
            self.stdout.write(self.style.SUCCESS('Created test user "demo" with password "demo1234"'))

        # Create a folder
        folder, _ = Folder.objects.get_or_create(user=user, name='ToeicA', defaults={'description': 'TOEIC Vocabulary'})
        
        # Create a deck
        deck, _ = Deck.objects.get_or_create(user=user, folder=folder, name='ToeicA - Part 1', defaults={'description': 'Words for TOEIC Part 1'})

        # Sample words based on the UI screenshot
        words_data = [
            {
                'term': 'Kick a ball',
                'ipa': '/kɪk e bɔːl/',
                'definition_vi': 'Đá bóng',
                'definition_en': 'To strike a sphere or round object with the foot.',
            },
            {
                'term': 'Racket',
                'ipa': '/ˈrækɪt/',
                'definition_vi': 'Cái vợt',
                'definition_en': 'A type of bat with a round or oval frame strung with catgut, nylon, etc., used in tennis, badminton, and squash.',
            },
            {
                'term': 'Net',
                'ipa': '/net/',
                'definition_vi': 'Tấm lưới',
                'definition_en': 'A piece of open-meshed material made of twine, cord, or something similar, used typically for catching fish.',
            },
            {
                'term': 'Shore',
                'ipa': '/ʃɔːr/',
                'definition_vi': 'Bờ biển, bờ hồ',
                'definition_en': 'The land along the edge of a sea, lake, or other large body of water.',
            },
            {
                'term': 'Race',
                'ipa': '/reɪs/',
                'definition_vi': 'Đua',
                'definition_en': 'To compete with another or others to see who is fastest.',
            },
            {
                'term': 'Dock',
                'ipa': '/dɒk/',
                'definition_vi': 'Bến tàu',
                'definition_en': 'A structure extending along shore or out from the shore into a body of water, to which boats may be moored.',
            },
        ]

        count = 0
        for data in words_data:
            word, w_created = Word.objects.get_or_create(
                user=user,
                deck=deck,
                term=data['term'],
                defaults={
                    'ipa': data['ipa'],
                    'definition_vi': data['definition_vi'],
                    'definition_en': data['definition_en'],
                }
            )
            if w_created:
                count += 1
                
        self.stdout.write(self.style.SUCCESS(f'Successfully seeded database with {count} new words'))
