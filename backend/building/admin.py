from django.contrib import admin
from .models import building


class buildingAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'longitude', 'latitude', 'image')

# Register your models here.


admin.site.register(building, buildingAdmin)
