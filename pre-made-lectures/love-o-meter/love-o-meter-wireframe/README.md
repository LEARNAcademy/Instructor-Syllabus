## This project should be styled using React strap.
- After creating your react app and cd'ing into your project, you will need to run the following commands in your terminal:

`npm install --save bootstrap`

`npm install --save reactstrap`

- You will then need to import Bootstrap CSS in the `src/index.js` file:

`import 'bootstrap/dist/css/bootstrap.min.css';`

- Once that's done, you can import the components you would like to use on your page via the following syntax:

`import { Button } from 'reactstrap';`

- Further documentation can be found at https://reactstrap.github.io/

## As a user, I can type my name and my crush's name into input fields
- As a developer, I understand how the handleChange methods in my App.js file interact with the state object

## As a user, when I click a button, I can see how compatible my crush and I are
- As a developer, I have a method that utilizes the user input from my state object to calculate "compatibility." I choose how I would like to do the calculation.
- I want to make sure my user doesn't include any numbers in their submission
- Simply returning an integer from Math.Random will not be sufficient for this challenge

## As a user, depending on if the names I enter are a good or bad match, I can see some sort of custom display
- As a developer, I want to provide my user with a good experience. I use conditional rendering to display some more information based on the results of the calculation method
- Options for this additional display are images, a small blurb, etc.
- As a stretch challenge, I return a small poem that includes the names that my user entered

## As a user, I can try again and again to find love
- As a developer, I have a method to reset the page
