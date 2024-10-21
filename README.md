# Vue Template

- [Vue Template](#vue-template)
  - [Description](#description)
  - [Project setup / Installation](#project-setup--installation)
  - [Commands](#commands)
    - [Develop](#develop)
    - [Build project](#build-project)
    - [Run build locally](#run-build-locally)
    - [Lints and fix](#lints-and-fix)
    - [Additional commands](#additional-commands)
  - [Development](#development)
  - [Build](#build)
  - [Environment variables](#environment-variables)
    - [NODE\_ENV \& VITE MODE](#node_env--vite-mode)
    - [VITE\_APP\_\*](#vite_app_)

<br>

## Description

//TODO: Add description

This project is based on my own [vue template](https://github.com/Nagell/vue_template)

<br>

## Project setup / Installation

Assuming that you have already installed `Node.js`,  
go to the root directory and run the following commands.

```bash
# Install globally Yarn package manager
npm install -g yarn

# Install dependencies
yarn run init
```

> [!NOTE]
> Remember to scan the project for `app_name` and replace them with your own values.

<br>

## Commands

### Develop

Start the app in development mode with hot-reloads

```bash
yarn run serve
```

### Build project

```bash
# Build for production
yarn run build:prod

# Build for staging
yarn run build:staging
```

### Run build locally

```bash
yarn run preview
```

### Lints and fix

```bash
# Only lint
yarn run lint

# Lint and fix
yarn run lint:fix
```

### Additional commands

```bash
# Install dependencies for ci
## Helpful when you want to install all dependencies for a CI pipeline,  
## reassuring that they are installed exactly as in the `yarn.lock` file.
yarn run ci

# Clean dependencies
## Helpful when you want to reinstall all dependencies.
yarn run clean
```

<br>

## Development

All commands, tips and tricks and documentation about used tools and libraries are in the  
[DEVELOPMENT.md](./docs/DEVELOPMENT.md) file.

<br>

## Build

```bash
yarn run build:prod
# or
yarn run build:staging
```

The builds are saved in the `/dist` directory.

<br>

## Environment variables

### NODE_ENV & VITE MODE

The NODE_ENV=production is not supported in the .env file in Vite  
Only NODE_ENV=development is supported to create a development build of the project  
Vite has also so called Mode, depending on the .env file used for build or a serve command.  

Respectively it uses

- `.env` or `.env.development` file for development mode (serve command)
- `.env.production` file for production mode (build command)
- `.env.[mode]` file for custom mode (build command with --mode [mode] argument)

If you need some local environment variables, use `.env.development.local` file.

More about modes [here](https://vitejs.dev/guide/env-and-mode.html#modes)  

To make use of it in your code, you can use `import.meta.env.MODE` variable.

```javascript
if (import.meta.env.MODE !== 'production') {
  console.log('Not the production mode');
}
```

<br>

### VITE_APP_*

Use `VITE_APP_` prefix to expose environment variables to your app  

```bash
VITE_APP_API_URL=https://api.example.com
```
