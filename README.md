# Acrool JS Logger

<a href="https://acrool-react-iconsvg.pages.dev/" title="Acrool JS Logger - style color console.log">
    <img src="https://acrool-js-logger.pages.dev/og.webp" alt="Acrool JS Logger Logo" />
</a>

<p align="center">
   style color console.log
</p>


<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/js-logger.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/js-logger)
[![npm](https://img.shields.io/bundlejs/size/@acrool/js-logger?style=for-the-badge)](https://github.com/acrool/js-logger/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/js-logger?style=for-the-badge)](https://github.com/acrool/acrool-js-logger/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/js-logger.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/js-logger)
[![npm](https://img.shields.io/npm/dt/@acrool/js-logger.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/js-logger)


</div>



## Features

- style color version console.log

## Installation

```bash
yarn add @acrool/js-logger
```

## Examples

```ts
import logger from '@acrool/js-logger';

const objectVar = {id: 1, name: 'imaginechiu'}; 
const arrayVar = [1, 2, 3, 4]; 
const arrayObjVar = [{id: 1, name: 'imaginechiu'}, {id: 2, name: 'selinwu'}, {id: 3, name: 'garychien'}]; 

logger.primary('primary', objectVar, arrayVar);
logger.success('success', objectVar, arrayVar);
logger.warning('warning', objectVar, arrayVar);
logger.danger('danger', objectVar, arrayVar);
logger.info('info', objectVar, arrayVar);

```

<img src="./preview.png" align="center" style="width: 700px;max-width: 100%"/>




There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-js-logger/main/play-in-example-button.svg)](https://acrool-js-logger.pages.dev)


## License

MIT © [acrool](https://github.com/acrool)

