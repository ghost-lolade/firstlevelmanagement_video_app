from django import forms
from regAuth.models import UserProfileInfo
from django.contrib.auth.models import User


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta():
        model = User
        fields = ('first_name','last_name','username','password','email')

# class UserProfileInfoForm(forms.ModelForm):
     
#      class Meta():
#          model = UserProfileInfo
#          fields = ('profile_pic')