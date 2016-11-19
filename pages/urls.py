from django.conf.urls import url
from pages.views import *

urlpatterns = [
    url(r'',index,name='index')
]
