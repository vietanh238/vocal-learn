from django.apps import AppConfig


class StudyConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'study'
    verbose_name = 'Study Sessions'

    def ready(self):
        pass  # Signal handlers can be registered here
