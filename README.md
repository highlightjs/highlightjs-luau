<img src="./assets/luau-logo.png" width="128" align="right">

# Luau Language Grammar for highlight.js

[Luau](https://luau.org) is a fast, small, safe, gradually typed embeddable scripting language derived from Lua.

[![NPM](https://nodei.co/npm/highlightjs-luau.png)](https://www.npmjs.com/package/highlightjs-luau)

[![npm](https://img.shields.io/npm/v/highlightjs-luau)](https://www.npmjs.com/package/highlightjs-luau)
[![npm](https://img.shields.io/npm/dt/highlightjs-luau)](https://www.npmjs.com/package/highlightjs-luau)
![install size](https://badgen.net/packagephobia/install/highlightjs-luau)
[![GitHub](https://img.shields.io/github/license/highlightjs/highlightjs-luau)](https://github.com/highlightjs/highlightjs-luau/blob/main/LICENSE.md)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/highlightjs-luau)
[![CDN download](https://badgen.net/badge/jsDelivr/download/blue?icon=jsdelivr)](https://cdn.jsdelivr.net/npm/highlightjs-luau/dist/luau.min.js)

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module. For more complex usage, see [highlight.js usage](https://github.com/highlightjs/highlight.js#basic-usage).

### Static website or simple usage

Simply load this module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script
	type="text/javascript"
	charset="UTF-8"
	src="/path/to/highlightjs-luau/dist/luau.min.js"></script>
<script type="text/javascript">
	hljs.registerLanguage('luau', hljsDefineLuau);
	hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script
	type="text/javascript"
	src="https://unpkg.com/highlightjs-luau/dist/luau.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsLuau = require('highlightjs-luau');

hljs.registerLanguage('luau', hljsLuau);
hljs.highlightAll();
```

## License

Highlight.js is released under the BSD 3-Clause License. See [LICENSE](https://github.com/highlightjs/highlight.js/blob/main/LICENSE) file for details.
Highlightjs-luau is released under the MIT License. See [LICENSE](/LICENSE.md) file for details.

## Author

Robloxian Demo [https://github.com/RobloxianDemo](https://github.com/RobloxianDemo).

## Contribution

Feel free to create issues or (even better) pull requests.

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>.
- Learn more about the Luau language: <https://luau-lang.org/why>.
