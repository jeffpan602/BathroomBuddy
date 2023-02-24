from django.db import models

# Create your models here.


class building(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    image = models.CharField(max_length=500)

    def _str_(self):
        return self.name
