from django.contrib import admin
from .models import user


class userAdmin(admin.ModelAdmin):
    list_display = ('id', 'username')

# Register your models here.


admin.site.register(user, userAdmin)
