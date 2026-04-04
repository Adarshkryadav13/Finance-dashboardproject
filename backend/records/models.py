from django.db import models
from django.conf import settings
# Create your models here.

User = settings.AUTH_USER_MODEL

class Records(models.Model):
    amount = models.FloatField()
    category = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=10, choices=[
    ('income', 'Income'),
    ('expense', 'Expense')
],
    default='income'
)