from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from .serializer import BlogSerializer
from rest_framework.decorators import api_view
from .models import Blog

# Create your views here.
@api_view(["GET"]) #this scopes the view to only be a get request
def home(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def create(request):
    serializer = BlogSerializer(data = request.data)
    if serializer.is_valid:
        serializer.save()
        return Response({"message": "Blog added successfully"})
    else:
        return Response(serializer.errors)