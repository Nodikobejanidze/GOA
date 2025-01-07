print("The street quiz has started!")
print("A guy in sneakers approaches you and asks: 'What kind of man are you?'")
    

print("\nChoose one of the answers:")
print("1) beating")
print("2) Stole Money")
print("3) fraternization")

    
choice = input("\nYour choice (1/2/3): ")

if choice == "1":
    print("\nBecause of your answer, the guy beats you up!")
elif choice == "2":
    print("\nThe guy asks for money. You are now obligated to give it to him")
elif choice == "3":
    print("\nThe guy wants to be friends with you. Now you're buddies!")
else:
    print("\nInvalid choice! The guy gets annoyed and just walks away.")
    
print("\nThe quiz is over!")



