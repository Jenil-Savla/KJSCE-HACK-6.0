from django.db import models

# Create your models here.
class Disaster(models.Model):
    title = models.CharField(max_length = 50)
    date = models.DateField()
    place = models.CharField(max_length = 50)
    active = models.BooleanField(default = True)
    
    def __str__(self):
        return self.title

class Volunteer(models.Model):
    disaster = models.ForeignKey(Disaster, related_name = 'disaster_volunteer' , on_delete=models.CASCADE)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length = 10)
    phone = models.BigIntegerField(unique = True)
    email = models.EmailField()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Donation(models.Model):
    disaster = models.ForeignKey(Disaster, related_name = 'disaster_volunteer' , on_delete=models.CASCADE)
    name = models.CharField(max_length = 100)
    phone = models.BigIntegerField(unique = True)
    email = models.EmailField()
    amount = models.IntegerField()
    success = models.BooleanField(default = False)

    def __str__(self):
        return f"{self.name} - {self.amount}"

class Report(models.Model):
    disaster = models.ForeignKey(Disaster, related_name = 'disaster_volunteer' , on_delete=models.CASCADE)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length = 10)
    phone = models.BigIntegerField(unique = True)
    email = models.EmailField()
    photo = models.ImageField(upload_to = 'missing')
    description = models.TextField(max_length = 255,blank = True,null=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"