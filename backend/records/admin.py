
from django.contrib import admin
from .models import Records

@admin.register(Records)
class RecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'amount', 'category', 'user', 'date')
    search_fields = ('category', 'description')
    list_filter = ('category', 'date')
