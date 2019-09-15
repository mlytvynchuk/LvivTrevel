from django.contrib import admin
from .models import Event, Category
# Register your models here.

class EventAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_filter = ['category', 'is_active']
admin.site.register(Event, EventAdmin)
admin.site.register(Category)
