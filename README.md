# Nest-Throw-Vs-Return-Error-Experiments

Navigate into the `project` directory.

Install dependencies:
```
npm i
```

Run local server:
```
npm start
```

Notice how these endpoints always return a 200 response with the error stringified (not what we want):
```
http://localhost:3000/example/return
http://localhost:3000/example/call-through/return
```

Notice how these endpoints always return the correct 418 status code:
```
http://localhost:3000/example/throw
http://localhost:3000/example/call-through/throw
```

---
<br/>

## So, this means that in NestJS we need to ***THROW*** errors for them to be correctly returned to the caller.

<br/>