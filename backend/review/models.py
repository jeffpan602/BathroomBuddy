from django.db import models

# Create your models here.


class review(models.Model):
    id = models.IntegerField(primary_key=True)
    user_id = models.IntegerField()
    bathroom_id = models.IntegerField()
    date = models.DateField()
    overall_rating = models.DecimalField(max_digits=2, decimal_places=1)
    cleanliness_rating = models.DecimalField(max_digits=2, decimal_places=1)
    smell_rating = models.DecimalField(max_digits=2, decimal_places=1)
    comments = models.TextField()
