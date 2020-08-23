# Comtravo Challenge

This server will provide a service to fetch flights information from two sources, merging them and removing duplicates.

Two flights are considered duplicated if they shared the same flight number and dates.

## Setup 

1) Add `.env` file with:

```js
USERNAME=USERNAME
PASSWORD=PASSWORD
PORT=PORT #Optional
TIMEOUT=TIMEOUT #Optional
```

2) Run `npm i` to install all dependencies

3) Run `npm start` to start the server

4) Make a GET request to http://localhost/4000/flights

