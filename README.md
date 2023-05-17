# credit-card-screen
Ready to go React Native Credit Card Screen - Made with ❤️ and Expo

## Before anything, you can see the project on the web:

https://bucket-challenge.surge.sh/

## how to run the project

For iOS
```
yarn && yarn ios
```

For Android
```
yarn && yarn android
```

For Web
```
yarn && yarn web
```
### If you have Expo Go installed in you iOS or Android device you can aim at this QR Code:

For iOS

<img width="336" alt="image" src="https://github.com/eshinkawa/credit-card-screen/assets/8547776/f7daecae-eadf-46ff-93ae-94454625abe9">


For Android

<img width="335" alt="image" src="https://github.com/eshinkawa/credit-card-screen/assets/8547776/112df7e9-9c2d-4e50-8be5-42508dd3161e">

## how to run the tests
You can run them directly on VSCode / Webstorm 

Or:
```
yarn jest
```
## Requirements met

The UI should be a simple input form that has the following fields:
- [x] Credit Card number.
- [x] Expiration date 
- [x] CVV security code
- [x] First name
- [x] Last name
- [x] Zip code

- [x] There should be a single submit button at the bottom of the UI and the information in the fields above should be validated upon click.  

Here are the required validations.

- [x] All fields are required.
- [ ] **Not completed, only Amex Validation** -  The credit card number should conform to the specifications for Visa, Mastercard, Discover, and Amex as listed here.
- [x] The credit card number should also pass the Luhn validation.  See link.
- [x] The expiration date should be in MM/YY format and should be in the future (i.e. not expired).  Make sure that the input field helps the user enter this properly…input masking can be used to accomplish this.
- [x] The CVV security code should be either 3 or 4 digits (AMEX).
- [x] The First and Last name fields should have alphabetic characters and spaces, i.e. be valid characters for a name and have a max length of 255 chars.
- [x] Zip code should numerical (US)

- [x] NOTE: if the candidate would like to do realtime / on blur validation as the data is entered that would also be acceptable.

- [x] If the information is valid, then a message should display that the card has been validated.
- [x] If any field is incorrect, the form should highlight that field and a message below should indicate what is wrong.

- [x] The solution should include unit tests to ensure that the validation logic is working properly and handles edge conditions.
