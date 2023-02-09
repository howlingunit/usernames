# usernames

A public text box for people to put their usernames, to see how popular it is compared to other usernames

front end built with react vite,
backend built with express, node and postgreSQL

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
