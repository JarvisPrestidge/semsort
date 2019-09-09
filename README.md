![node](https://img.shields.io/badge/node-v8.10.0-blue.svg) 
![yarn](https://img.shields.io/badge/yarn-v1.7.0-yellow.svg) 

# semsort

Semantic versioning compliant sorting algorithm
* 🔥 **Performant**
* 🎉 **Zero dependencies**
* 👌🏼 **First class typescript support**
* 🙌🏼 **Handles pre-release candidates syntax** - i.e. v.1.2.3-pre1-beta.01
* 🧠 **Format agnostic** - handles bespoke numerical formats and delimiters

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Api](#api)
- [Examples](#examples)
- [Author](#author)

## Installation

```bash
$ yarn add semsort
```

```bash
$ npm install semsort
```

## Usage

```typescript
import * as semsort from "semsort";
...
```

## API

### `asc(input: string[]): string[]`
> sorts an input array or sem var formatted strings by ascending version
### `desc(input: string[]): string[]`
> sorts an input array or sem var formatted strings by descending version

## Examples

```js
import * as semsort from "../src";

(() => {

    const semvarArrayUnsorted = [
        "v1.2.3-pre1-alpha",
        "v5.5.501",
        "v1.2.3-pre2-alpha",
        "v1.2.3-pre2-alpha2",
        "v5.2.1",
        "v5.5.22",
        "v8.0.0",
        "v0.21.1",
        "v6.22.9"
    ]

    console.log("original unsorted:");
    console.dir(semvarArrayUnsorted);

    //   [ 'v1.2.3-pre1-alpha',
    //     'v5.5.501',
    //     'v1.2.3-pre2-alpha',
    //     'v1.2.3-pre2-alpha2',
    //     'v5.2.1',
    //     'v5.5.22',
    //     'v8.0.0',
    //     'v0.21.1',
    //     'v6.22.9' ]

    const resultAscending = semsort.asc(semvarArrayUnsorted);

    console.log("ascending result:");
    console.dir(resultAscending);

    //   [ 'v0.21.1',
    //     'v1.2.3-pre1-alpha',
    //     'v1.2.3-pre2-alpha',
    //     'v1.2.3-pre2-alpha2',
    //     'v5.2.1',
    //     'v5.5.22',
    //     'v5.5.501',
    //     'v6.22.9',
    //     'v8.0.0' ]


    const resultDescending = semsort.desc(semvarArrayUnsorted);

    console.log("descending result:");
    console.dir(resultDescending);

    //   [ 'v8.0.0',
    //     'v6.22.9',
    //     'v5.5.501',
    //     'v5.5.22',
    //     'v5.2.1',
    //     'v1.2.3-pre2-alpha',
    //     'v1.2.3-pre2-alpha2',
    //     'v1.2.3-pre1-alpha',
    //     'v0.21.1' ]

})();
```

## Author

> Jarvis Prestidge - jarvisprestidge@gmail.com
