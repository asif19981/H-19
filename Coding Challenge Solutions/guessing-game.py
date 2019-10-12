from random import randint

print ("Time to play a guessing game!")
guesses = 0

ai = (randint(0,3))

while(guesses < 10):
  userinput = input("Enter your guess: ")
  userinput = int(userinput)
  guesses += 1

  if ai == userinput:
    guesses = str(guesses)
    print("Correct.You took "+guesses+" guesses")
    break
  else:
    print("LOSER!")
 





