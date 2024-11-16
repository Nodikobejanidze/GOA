person = {
    "name": "Nodiko",
    "surname": "Bezhanidze",
    "age": "28",
    "arr": [1, 2, 3, 4, 5, 6]


}


person['name'] = "George"

person.update({"name : Nodiko"})
person.update({"car : Bmw E60"})

print(person)


print(person["name"], "/ arr method")

print(person.get('name'), '/ get method')


print(person.values(), "valuesssss")




x = person.keys()
print(person.keys())





print(person.items() ,  "items")




print(person["arr"][0])
print(len(person))

x = person["arr"]
print(x)


person['food'] = "atsavadi"



person.pop("car")
person.popites()
del person['name']

person.clear()
print(person)



