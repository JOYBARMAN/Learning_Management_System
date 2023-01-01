from django.db import models

# Teacher model
class Teacher(models.Model):
    full_name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 20)
    qualification = models.CharField(max_length = 255)
    mobile_num = models.CharField(max_length = 20)
    address = models.TextField()

    class Meta:
        verbose_name_plural = "1. Teachers"

    def __str__(self) :
        return self.full_name

# Course category model 
class CourseCategory(models.Model):
    title = models.CharField(max_length = 150)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "2. Course Categories"

    def __str__(self) :
        return self.title

# Course model 
class Course(models.Model):
    category = models.ForeignKey(CourseCategory , on_delete = models.CASCADE)
    teacher = models.ForeignKey(Teacher , on_delete = models.CASCADE)
    title = models.CharField(max_length = 150)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "3. Courses"

    def __str__(self) :
        return self.title

# Student model
class Student(models.Model):
    full_name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 20)
    qualification = models.CharField(max_length = 255)
    mobile_num = models.CharField(max_length = 20)
    address = models.TextField()
    interested_categories = models.TextField()


    class Meta:
        verbose_name_plural = "4. Students"

    def __str__(self) :
        return self.full_name
