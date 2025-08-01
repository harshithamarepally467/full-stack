from django.db import models

# Create your models here.
class csd(models.Model):
    name=models.CharField(max_length=100)
    rollno=models.IntegerField()
    slug=models.SlugField( unique=True,blank=True,null=True)
    photo = models.ImageField(upload_to='photos/',null=True)


    def _str_(self):
        return f"{self.name}-{self.rollno}"

# class hello(models.Model):
#     name=models.CharField(max_length=100)
#     rollno=models.IntegerField()
#     emailid=models.CharField(max_length=100)

#     def _str_(self):
#         return f"{self.name}-{self.rollno}-{self.emailid}"

