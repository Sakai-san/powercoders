This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

This repo aims to introduce the basic concepts of react such as react component, component state, CSS in JS, unidirectional data flow, declarative UI programming.

This repo is not meant for any production environment.

## Setup

This repo requires you to have a MySQL or MariaDB server. Indeed data are supplied to the frontend by means of a REST api on top of the database.

## Launch the app

- First edit the `config/config.json` file about your database settings.
- Launch your database server.
- Adjust the script called `init-db` located in the `package.json` file to your local database settings.
- run `npm run api` for making the REST api available.
- In another console, run `npm run start` for serving the react app.
