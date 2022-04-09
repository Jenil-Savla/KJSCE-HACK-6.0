from django.contrib import admin
from .models import Disaster,Volunteer,Donation,Report,Found

admin.site.register(Disaster)
admin.site.register(Volunteer)
admin.site.register(Donation)
admin.site.register(Report)
admin.site.register(Found)