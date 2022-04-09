from rest_framework import serializers

from .models import Disaster,Volunteer,Donation

class DisasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disaster
        fields = '__all__'

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'