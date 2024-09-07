1 <<<< react was vite ========================================================

npm create vite@latest papyr -- --template react

cd papyr

npm i 

2 <<<< tailwindcss ===========================================================

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

add this to tailwind.config.js file:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

add this to index.css file:

@tailwind base;
@tailwind components;
@tailwind utilities;

3 <<<< CONFIGURE TESTS ===========================================================

GUIDE ON HOW TO CONFIGURE TESTS

Step one -----
Install all the required dependencies

npm i -D @testing-library/jest-dom @testing-library/react @babel/preset-react @babel/preset-env jest jest-environment-jsdom

Step two -----
Configure babel.

Create a file called babel.config.cjs in the root of your directory.
Put the following code in the file
module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};

Step three ----
Configure jest

Create a file called jest.config.js in the root of your directory.
Put the following code in the file:
const jestConfig = {
  testEnvironment: "jsdom",
};

export default jestConfig;

Step four ----
In your package.json add a script in the scripts section: "test": "jest"

Congratulations!
Now you can write your tests and run them using the command

npm test


4 <<<< react-router-dom ===========================================================

npm install react-router-dom


5 <<<< firebase ===========================================================

npm i firebase


6 <<<< Google Fonts ===========================================================


7 <<<< zustand ===========================================================

npm i zustand


8 <<<< react-hook-form ===========================================================

npm install react-hook-form