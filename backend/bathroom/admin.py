from django.contrib import admin

# Register your models here.
from .models import bathroom


class bathroomAdmin(admin.ModelAdmin):
    list_display = ('id', 'building_id', 'longitude', 'latitude', 'floor',
                    'room_number', 'num_toilets', 'num_urinals', 'num_sinks', 'gender')

# Register your models here.


admin.site.register(bathroom, bathroomAdmin)
