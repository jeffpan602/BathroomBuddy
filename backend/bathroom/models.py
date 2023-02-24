from django.db import models

# Create your models here.


class bathroom(models.Model):
    id = models.IntegerField(primary_key=True)
    building_id = models.IntegerField()
    building_name = models.CharField(max_length=50)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    floor = models.IntegerField()
    room_number = models.IntegerField()
    num_toilets = models.IntegerField()
    num_urinals = models.IntegerField()
    num_sinks = models.IntegerField()
    gender = models.CharField(max_length=50)

    def _str_(self):
        return self.building_name + " " + self.room_number
