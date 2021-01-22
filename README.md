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

Test-6: "It should return 'won't you be my neighbor' if the number 3 is present among a larger number"
Expect(beepBoop(13)).toEqual('won't you be my neighbor')


## Description

_This website allows users to enter a number and receive a response from Mr. Roboger_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Arrays of multiple numbers do not replace 1, 2, or 3 with associated string at indexes other than 0_

## License

[MIT](LICENSE.txt)

## Contact Information

_Morgan Bradford_: morganjbradford95@gmail.com