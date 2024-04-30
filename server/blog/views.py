from django.shortcuts import render, get_object_or_404
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

@api_view(["GET"])
def view(request, id):
    blog = get_object_or_404(Blog, pk=id)
    serializer = BlogSerializer(blog)
    return Response(serializer.data)

@api_view(["POST"])
def create(request):
    serializer = BlogSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Blog added successfully"})
    else:
        return Response(serializer.errors)

@api_view(["GET", "PUT"])
def update(request, id):
    blog = get_object_or_404(Blog, pk=id)
    if request.method == "PUT":
        serializer = BlogSerializer(blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Blog has been updated successfully"})
        else:
            return Response(serializer.errors)
    elif request.method == "GET":
        serializer = BlogSerializer(blog)
        return Response(serializer.data)
    
@api_view(["GET"])
def delete(request, id):
    blog = get_object_or_404(Blog, pk=id)
    blog.delete()
    return Response({"message": "Blog deleted successfully"})