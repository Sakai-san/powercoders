This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

This repo aims to introduce the basic concepts of react such as component, state, CSS in JS, unidirectional data flow, declarative progamming.

## Setup

This repo assume you have a MySQL or MariaDB server. Indeed data are supplied to frontend by means of a REST api on top of the database.

## Launch the app

- First edit the `config/config.json` file about your database settings.
- Launch your database server.
- run `npm run api` for making the REST api available.
- run `npm run start` in another console for serving the react app.
