from django.contrib import admin
from .models import review


class reviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', 'bathroom_id', 'date',
                    'overall_rating', 'cleanliness_rating', 'smell_rating', 'comments')


# Register your models here.

admin.site.register(review, reviewAdmin)
