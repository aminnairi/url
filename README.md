# @aminnairi/url

Utility functions to help you work with urls.

[![Continuous Integration](https://github.com/aminnairi/url/actions/workflows/continuous_integration.yaml/badge.svg)](https://github.com/aminnairi/url/actions/workflows/continuous_integration.yaml)

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
      import {isMatchingPath, getMatchingPathParameters} from "https://unpkg.com/@aminnairi/url?module";

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

## Documentation

### isMatchingPath

#### Signature

```typescript
const isMatchingPath = (path: string, url: string) => boolean;
```

#### Examples

```javascript
isMatchingPath(null, "/");
// false

isMatchingPath("/", null);
// false

isMatchingPath("/", "/");
// true

isMatchingPath("", "/");
// true

isMatchingPath("/", "");
// true

isMatchingPath("/", "/users");
// false

isMatchingPath("/users/:user", "/users/123");
// true

isMatchingPath("/users/:user", "/posts/123");
// false

isMatchingPath("/users/:user", "/users/123/posts");
// false

isMatchingPath("/users/:user/posts/:post", "/users/123/posts/456");
// true
```

### getMatchingPathParameters

#### Signature

```typescript
const getMatchingPathParameters = (path: string, url: string) => Record<string, string>;
```

#### Examples

```javascript
getMatchingPathParameters(null, "/");
// {}

getMatchingPathParameters("/", null);
// {}

getMatchingPathParameters("/", "/");
// {}

getMatchingPathParameters("", "/");
// {}

getMatchingPathParameters("/", "");
// {}

getMatchingPathParameters("/", "/users");
// {}

getMatchingPathParameters("/users/:user", "/users/123");
// {user: "123"}

getMatchingPathParameters("/users/:user", "/posts/123");
// {}

getMatchingPathParameters("/users/:user", "/users/123/posts");
// {}

getMatchingPathParameters("/users/:user/posts/:post", "/users/123/posts/456");
// {user: "123", post: "456"}
```

## Changelog

See [`CHANGELOG.md`](https://github.com/aminnairi/url/blob/development/CHANGELOG.md).

## Contributing

See [`CONTRIBUTING.md`](https://github.com/aminnairi/url/blob/development/CONTRIBUTING.md).

## License

See [`LICENSE`](https://github.com/aminnairi/url/blob/development/LICENSE).
