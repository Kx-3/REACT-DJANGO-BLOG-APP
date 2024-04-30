from django.urls import path
from .views import home, create, view, update, delete

urlpatterns = [
    path("", home, name='home'),
    path("blogs/<str:id>", view, name='view'),
    path("create/", create, name='create'),
    path("update/<str:id>", update, name='update'),
    path("delete/<str:id>", delete, name='delete')
]