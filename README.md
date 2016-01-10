# react-widen

> Widen a React component.

[![Build Status][build-badge]][build]
[![npm version][npm-badge]][npm]

Widen a React component. Mostly useful for headers and footers that need to span the entire width of the screen.

## Installation

```sh
npm install --save react-widen
```

## Usage

```js
import widen from 'react-widen'

import MyComponent from './MyComponent'

export default widen()(MyComponent)
```

## API

### `widen(amount: number | string = '1000px')`

Extends the left and right edges of the wrapped component by the specified amount.

#### Parameters

* [`amount`] \(*string | number*): The amount to extend the edges by. If a number is provided, the string ```px``` is automatically appended. Defaults to ```1000px```.

## Notes

To prevent horizontal scrolling, the ```<html>``` and ```<body>``` elements should have ```overflow-x: hidden``` applied.

## License

MIT

[build-badge]: https://travis-ci.org/apalm/react-widen.svg?branch=master
[build]: https://travis-ci.org/apalm/react-widen

[npm-badge]: https://badge.fury.io/js/react-widen.svg
[npm]: https://badge.fury.io/js/react-widen
