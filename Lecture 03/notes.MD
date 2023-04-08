# Package managers

Nodejs

- npm
  - default package installer
  - npm init -> creates package.json file
  - package-lock.json
- npx
- Yarn
  - Much better than npm in terms of performance
  - Provides better security
  - lock.json file for depedencies

# Monolithic and micro services

While a monolithic application is a single unified unit, a microservices architecture
breaks it down into a collection of smaller independent units.
These units carry out every application process as a separate service.
So, all the services have their own logic and databases, as well as perform specific functions.

# System Design

Systems design is the process of defining elements of a system like modules, architecture, components and their interfaces and data for a system based on the specified requirements.

Highest paid job

# Raectjs

## Creating react app and running

```bash
npx creact-react-app hello-world
npm start
```

## Adding bootstrap in to the app

[Tutorail](https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/)

```bash
npm install bootstrap
# OR
yarn add bootstrap
```

```jsx
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
```

## React bootsrap

```bash
npm install react-bootstrap bootstrap
```

```jsx
import { Button } from "react-bootstrap";
```

# Separation of Concerns

- Different files for different components
- Each file has its own html (jsx), css, and js
