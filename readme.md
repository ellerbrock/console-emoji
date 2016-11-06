# [console-emoji](https://www.npmjs.com/package/console-emoji)

[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_console.log messages with emoji support and color_

![console-emoji](https://github.frapsoft.com/top/console-emoji.jpg)

## Project Status

[![Build Status](https://travis-ci.org/ellerbrock/console-emoji.svg?branch=master)](https://travis-ci.org/ellerbrock/console-emoji)

### install with npm

`npm install --save console-emoji`

### install with yarn

`yarn add console-emoji`

### Example

#### ES5

```javascript
var log = require('console-emoji')
```

#### ES6

```javascript
import log from 'console-emoji'
```

### Examples

```javascript
// log without colors and emojis
log('normal log ...')

// log with color and emojis
log('success ...', 'ok')
log('warning ...', 'warn')
log('error ...', 'err')

// text with emojis
log(':sparkles: :star: :star:  :dizzy:  i like emojis  :two_hearts: :sparkling_heart: :revolving_hearts:')
log('damn error :rage:', 'err')

// color text
log('just some red text', 'red')
log('green text with a kitten :smile_cat:', 'green')
```

### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)