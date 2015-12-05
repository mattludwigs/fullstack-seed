# Lib

## log.js

Description: Basic console.log using chalk

API:

1. okay

Prints a message that is green

params: `message : String`

```
okay('My okay message');
```

2. info

Prints a message yellow

params: `message : String`

```
info('let me tell you some info');
```
3. `error`: Prints bold red and throws error

Prints a message bold read and throws and error
params: `message : String`

```
error('Broken things');
```

4. log 

Prints a message given a color. Color defaults to cyan

params: `message : String`, `color=cyan : String`

```
log('message')
// in cyan
//=> message

log('message', 'magenta');
// in magenta
//=> message
```