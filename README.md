# time

This is a simple node server, serving JSON through an API that tells the time.

*TODO*: Make it serve actual JSON

Querying `/time` will return the current UTC time.

## How to setup and run locally

Make sure you have node and npm installed (tested with versions 7.4.0 and 4.0.5, respectively), clone the rep and run

```
npm install && npm start
```

in the directory containing the rep. The application will be listening on port 3000, so make sure that one's free.

## How to deploy

Clone the rep and run

```
docker build -t <YOUR_TAG> .
```

to build the image, run it with

```
docker run -rm -it -p <YOUR_PORT>:3000 <YOUR_TAG>
```

and the content will henceforth be served on your host, on the port of your choosing.
