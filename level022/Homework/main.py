# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


# numbers.pop(4)

# print(numbers.count(5))



# def greet(username = "Guest"):
    # print("Hello + username")

# greet("Nodiko")
# greet("Nikoloz")



def add(num1, num2, operation):
    if operation == "+":
        print(num1 + num2)
    elif operation == "-":
        print(num1 - num2)
    elif operation == "*":
        print(num1 * num2)
    elif operation == "/":
        print(num1 / num2)
    else:
        print("Invalid Operation")

add(8, 3, "+")
add(20, 8, "*")
add(20, 3, "/")
add(50, 20, "-")





