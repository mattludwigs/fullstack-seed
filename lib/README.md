# Lib

## log.js

Description: Basic console.log using chalk

API:

okay

Prints a message that is green

params: `message : String`

```
okay('My okay message');
```

info

Prints a message yellow

params: `message : String`

```
info('let me tell you some info');
```
error

Prints a message bold read and throws and error
params: `message : String`

```
error('Broken things');
```

log

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