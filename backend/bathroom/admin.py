from django.contrib import admin
from .models import bathroom


class bathroomAdmin(admin.ModelAdmin):
    list_display = ('id', 'building_id', 'building_name', 'floor',
                    'room_number', 'num_toilets', 'num_urinals', 'num_sinks', 'gender')

# Register your models here.


admin.site.register(bathroom, bathroomAdmin)
