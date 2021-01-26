# _Mr. Roboger's Neighborhood_

#### _This website allows users to enter a number and receive a response from Mr. Roboger_

#### By _**Morgan Bradford**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Specifications

Describe: beepBoop()

Test-1 "it should return an array of consecutive numbers, up to and including the user's response"
Expect(beepBoop(5))toEqual([0, 1, 2, 3, 4, 5])

Test-2: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0)).toEqual([0]);

Test-3: "It should return 'Won't you be my neighbor?' if the number 3 is entered"
Expect(beepBoop(3))toEqual('Won't you be my neighbor?')

Test-4: "It should return 'Boop!' if the number 2 is entered"
Expect(beepBoop(2)).toEqual('Boop!')

Test-5: "It should return 'Beep!' if the number 1 is entered"
Expect(beepBoop(1)).toEqual('Beep!')

Test-6: "It should replace 0, 1, 2, or 3 in a return array with their associated string"
Expect(beepBoop(5)).toEqual([0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5])

Test-7: "It should return 'won't you be my neighbor' if the number 3 is present among a larger number"
Expect(beepBoop(13)).toEqual([0, 'Beep!', 'Boop!, 'won't you be my neighbor?', 4,..., 'Beep!' 'Beep!', 'Boop!', 'won't you be my neighbor?')


## Description

_This website allows users to enter a number and receive a response from Mr. Roboger_

## Setup/Installation Requirements

1. Clone this repository from GitHub
2. Navigate to the top directory
3. Use your favorite browser to open index.html
4. Enter a number, press enter and view Mr. Roboger's response!
5. View Mr. Roboger's response!

_Details_: using terminal, navigate to the directory you would like to download this directory to. For this example we will be navigating to desktop. For any commands, type what is in between the 'single' quotation marks. To navigate to desktop, type 'cd ~/desktop'. To confirm your location enter 'pwd'. You should receive a message similar to "/c/Users/vampi/desktop" in this instance my location translates to "/hard drive c/Users folder/user/desktop". The last entry "desktop" is my current directory, and just happens to be inside of the other directories previously listed.

**Note: If you have a directory named mr.Robogers-Neighborhood located here before using this next command, you may run into issues. To see a list of directories in your current location enter 'ls' in the terminal.**

Next, enter the following command 'git clone https://github.com/MorganJBradford/mr.-Robogers-Neighborhood.git'

The terminal should return with something similar to:

> Cloning into 'mr.-Robogers-Neighborhood'...
>
> remote: Enumerating objects: 94, done.
>
> remote: Counting objects: 100% (94/94), done.
>
> remote: Compressing objects: 100% (62/62), done.
>
> remote: Total 94 (delta 41), reused 82 (delta 29), pack-reused 0
>
> Receiving objects: 100% (94/94), 119.48 KiB | 1.05 MiB/s, done.
>
> Resolving deltas: 100% (41/41), done.

Next enter the command "ls" which should return with a list of files and directories. Mine returned with:

desktop.ini icebreaker/ portfolio/ mr.Robogers-Neighborhood/

Because I did not have a directory named mr.Robogers-Neighborhood, I know it downloaded successfully. Now you should have an icon for the directory named mr.Robogers-Neighborhood on your desktop background. Double click on the icon, this should open the directory. Right click on "index.html" select open, or select open with if you have multiple web browsers and would like to use a specific one.

Enter a number, press enter and view Mr. Roboger's response!

## Known Bugs

* _Numbers in arrays > 10 containing 1, 2, or 3, such as 13, are not replaced with their associated strings_
* _Results do not display on the page_

## License

[MIT](LICENSE.txt)

## Contact Information

_Morgan Bradford_: morganjbradford95@gmail.com