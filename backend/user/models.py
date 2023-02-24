from django.db import models

# Create your models here.


class user(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=25)

    def _str_(self):
        return self.username
