# Registration login App using create-react-app

Create React apps with no build configuration.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new).

## Quick steps

```sh
npm install -g create-react-app

create-react-app react-registration-form
cd react-registration-form
npm start
```
Then open http://localhost:3000 to see the app running.

We will have a following initial project Structure and install transitive
dependencies

```
react-registration-form
├── README.md
├── node_modules
├── package.json
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
    └── store.js
    └── actions
        └── userActions.js
    └── reducers
        └── userReducer.js
    └── components
        └── App.js
        └── Button.js
        └── Form.js
        └── Intro.js
        └── Loader.js
        └── Textbox.js

```
Following data is present in userData object, for providing validations and handling errors.(handled through promises) App throws a message that 'such a user already exists' when we try to register with these below mentioned details. Also a success message is displayed when registered using new user details.

{
  Email: "Tani@gmail.com",
  FullName: "Tani"
},
{
  Email: "Rani@gmail.com",
  FullName: "Rani"
},
{
  Email: "Aani@gmail.com",
  FullName: "Aani"
}

The App also provides instructions on what are the valid entries for each fields in the Registration form. It would not allow us to register if the fields are not validated.
