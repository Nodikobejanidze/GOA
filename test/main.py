def my_function():
  print("Hello Nodo")

my_function()


def my_function(x):
  return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))


def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Nodiko", lname = "Bejanidze")


def my_function(x):
  print(x)

my_function(x = 3)


def my_function(x):
  return 6 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))

def my_function(x):
  return 9 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))



def my_function(x):
  print(x)

my_function(x = 5)


def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Nodo")


def my_function(*, x):
  print(x)

my_function(3)           

def my_function():
  print("Your Age")