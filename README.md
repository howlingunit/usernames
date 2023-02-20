# This is the react vite frontend

# Usernames

A public text box for people to put their usernames in. This then submits the username to a database, and you see how many times before that username has been submitted.

This project was done so I could test my ability to create REST APIs, connect Node to a Postgres DB,  and build in REACT app that could talk with the API.

front end built with react vite,
backend built with express, node and postgreSQL

hosted at [usernames.tyway.net](https://usernames.tyway.net)

# API

## /all-usernames (get)

This returns all usernames and ID's

## /amt-of-names?username=example (get)

This returns the number of times a specific username appears in the database

there is one query of username to specify the username you want

## /add-username (post)

This is where a username is submitted

it requires a JSON body with an object that looks like:

`{"username" : "example username"}`
