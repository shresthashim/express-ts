# Express TypeScript Starter

![Express](https://img.shields.io/badge/Express-4.17.1-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue) ![Node.js](https://img.shields.io/badge/Node.js-16.13.1-green)

A lightweight and flexible Express.js starter template powered by TypeScript. This repository provides a solid foundation for building RESTful APIs and web applications with TypeScript.

---

## Features

- **TypeScript Support**: Fully configured TypeScript for type safety and modern JavaScript features.
- **Modular Architecture**: Organized folder structure for easy navigation and maintenance.
- **Environment Configuration**: Use of `.env` files for configuration management.
- **Error Handling**: Centralized error handling middleware.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shresthashim/express-ts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-ts
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your configuration settings.

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The server will start on [http://localhost:5000](http://localhost:3000).

### Running Tests

To run the tests, use:

```bash
npm test
# or
yarn test
```

---

## Folder Structure

```
express-ts/
├── src/
│   ├── controllers/      # Controllers for handling requests
│   ├── middlewares/      # Custom middleware functions
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── utils/            # Utility functions
├── .env                  # Environment variables
├── .eslintignore         # Files and directories to ignore for ESLint
├── .eslintrc.json        # ESLint configuration file
├── .gitignore            # Git ignore file
├── package.json          # NPM package configuration
└── tsconfig.json         # TypeScript configuration

```

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any improvements or suggestions.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

---

## Contact

For any inquiries, feel free to reach out via [your email](mailto:ashim@ashimshrestha.me).
