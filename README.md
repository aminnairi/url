# @aminnairi/url

## Usage

### Node

#### ECMAScript Module

```bash
npm install @aminnairi/url
```

```javascript
import {isMatchingPath, getMatchingPathParameters} from "@aminnairi/url";

console.log(isMatchingPath("/users/:user", "/users/123"));

console.log(getMatchingPathParameters("/users/:user", "/users/123"));
// {user: "123"}
```

#### CommonJS

```bash
npm install @aminnairi/url
```

```javascript
const {isMatchingPath, getMatchingPathParameters} = require("@aminnairi/url");

console.log(isMatchingPath("/users/:user", "/users/123"));
// true

console.log(getMatchingPathParameters("/users/:user", "/users/123"));
// {user: "123"}
```

### Browser

#### ECMAScript Module

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@aminnairi/url">
    <meta name="theme-color" content="#ffffff">
    <title>@aminnairi/url</title>
  </head>
  <body>
    <script type="module">
      import {isMatchingPath, getMatchingPathParameters} from "https://unpkg.com/@aminnairi/url";

      console.log(isMatchingPath("/users/:user", "/users/123"));

      console.log(getMatchingPathParameters("/users/:user", "/users/123"));
    </script>
  </body>
</html>
```

#### Script

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@aminnairi/url">
    <meta name="theme-color" content="#ffffff">
    <title>@aminnairi/url</title>
  </head>
  <body>
    <script src="https://unpkg.com/@aminnairi/url"></script>
    <script>
      const {isMatchingPath, getMatchingPathParameters} = window["@aminnairi/url"];

      console.log(isMatchingPath("/users/:user", "/users/123"));

      console.log(getMatchingPathParameters("/users/:user", "/users/123"));
    </script>
  </body>
</html>
```
