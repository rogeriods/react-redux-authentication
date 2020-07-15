# Login Authentication API

This is the RESTFull API using mongodb, express, express-validator, cors, jwt and bcryptjs.

# Quick Start

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret"
}
```

### Install dependencies

```bash
npm install
```

### Running

```bash
# Development mode
npm run dev

# Production
npm start
```
