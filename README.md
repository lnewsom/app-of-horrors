# AppOfHorrors

## Branch: step-five
This branch installs NgRx Effects and creates the first effect to trigger plant-listing load on component load.

# Set Up Ng Conf Workshop
If you are attending "Little App of Horrors - Saving the Day with NgRx" please do the following steps before the workshop to make sure you are able to code along. 

You will need git, node, angular, and your favorite code editor installed on your machine. 

I will be using VS Code for the workshop.

* $ `git clone https://github.com/lnewsom/app-of-horrors.git`
* $ `cd app-of-horrors/`
* $ `git checkout version-one`
* $ `npm install`
* $ `ng serve -o`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

To stop the app while it is running press Ctrl + C in the terminal that is running the code.

## Running unit tests

The tests use jest. To run tests `npm test` 
Code coverage is set to 100%

## Running end-to-end tests

This project does not have end to end tests because it does not actually interface with external resources. All data is mocked in `src/assets/db`
