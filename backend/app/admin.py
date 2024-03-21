from django.contrib import admin
from app.models import BasicBuildingDetails
# Register your models here.

class BasicBuildingDetailsAdmin(admin.ModelAdmin):
    pass

admin.site.register(BasicBuildingDetails, BasicBuildingDetailsAdmin)