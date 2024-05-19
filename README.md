# Acrool JC Console

<p align="center">
    style color console.log
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/acrool-js-conole.svg?style=for-the-badge)](https://www.npmjs.com/package/acrool-js-conole)
[![npm downloads](https://img.shields.io/npm/dm/acrool-js-conole.svg?style=for-the-badge)](https://www.npmjs.com/package/acrool-js-conole)
[![npm](https://img.shields.io/npm/dt/acrool-js-conole.svg?style=for-the-badge)](https://www.npmjs.com/package/acrool-js-conole)
[![npm](https://img.shields.io/npm/l/acrool-js-conole?style=for-the-badge)](https://github.com/@acrool/acrool-js-conole/blob/main/LICENSE)

</div>


## Features

- style color

## Installation

```bash
yarn add @acrool/js-console
```

## Examples

```ts
import logger from '@acrool/js-console';

const objectVar = {id: 1, name: 'imaginechiu'}; 
const arrayVar = [1, 2, 3, 4]; 
const arrayObjVar = [{id: 1, name: 'imaginechiu'}, {id: 2, name: 'selinwu'}, {id: 3, name: 'garychien'}]; 

logger.primary('primary', objectVar, arrayVar);
logger.success('success', objectVar, arrayVar);
logger.warning('warning', objectVar, arrayVar);
logger.danger('danger', objectVar, arrayVar);
logger.info('info', objectVar, arrayVar);

```

## License

MIT © [acrool](https://github.com/acrool)

