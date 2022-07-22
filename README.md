# Password generator

### I'd like to make a generator to create random passwords for security 

#### Below i have detailed the process of making this password generator.

<br>

Link to live site: https://github.com/MichaelW1996/Password_Generator_repository

<br>

## Javascript:

Starting point:

    Starting code was provided, this had adequate styling, HTML content and partial Javascript, i took this and developed the JS to perform the function of the site.

Javascript:

    At the top of the document i have listed variables that i wish to be global, i also find this is a more convenient place to store them if i should want to adjust any properties of the program such as which special characters are available or the maximum lenght of a password

    I gave variable names to some data that i only used once in order to make the code more readable, a good example of this is the min and max lenghts for the password 

    I had noticed that the page would retain the password generated even after a refresh, as such i started the JS by defining the "pass" variable as a default text and writing this to the page as a clean slate

    Function 1: Generate an array of possible characters

        My first function, when called, prompts the user to create an array of chosen characters.

        This is acheived by using PasChar as a working string which is added to at each step

        I used concat to attach the selected characters to the working string PasChar if the confirm box is true (indicating user pressed "OK")

        After all the confirms have been accepted or skipped i check that the working string is not still blank, using PasChar == "", if it is blank, the function starts over after alerting use "Please select at least one set of characters"


    Function 2: Ask for a length of password and return alerts if the responce is not valid

        User is prompted for a password length, this is stored as variable "length"

        If variable length is not an interger, user received alert "Type a number" and function starts over

        If variable length is less than Min length, user received alert "Password is not long enough" and function starts over

        If variable length is longer than max length, user received alert "Password is too long enough" and function starts over


    Function 3: GeneratePassword using input of the previous 2 functions this is performed by: 
    
        Wiping the "pass" variable clean using // pass="" //

        A loop is then run, starting at i= 0, ending when i is equal to Length described by Function 2

        Each time the loop runs a character from the array of available characters is selected by a random number generator, this character is added to the pass variable

        the random number is generated by using Math.random times by the array lenght, this gives a random floating digit between 0 and the array length. 

        This random floating point number is turned into an interger that can be used to choose the character using the math.floor function


    Function 4: Write Password

        This function runs function 1-3 then prints the value to the HTML 


    The JS ends with an event listener waiting for a click on the generate button, when pressed the Write password function is run 

Coded by Michael Walters