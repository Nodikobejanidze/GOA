

def manual_count(list, element):
    count = 0
    for i in range(len(list)):
        if list[i] == element:
            count += 1
    return count

print(manual_count([1, 2, 2, 3, 2, 5], 2))




def manual_index(list, element):
    for i in range(len(list)):
        if list[i] == element:
            return i

print(manual_index([1, 2, 3, 4, 5], 3))

print("GOA". lower())
print("david".upper())

print("david".capitalize())
print("david"[0].upper() + "david"[1:])