#ansi-substring

[![npm version](https://badge.fury.io/js/ansi-substring.svg)](https://badge.fury.io/js/ansi-substring)

##Install

	npm install ansi-substring --save

##Development

	git clone https://github.com/se0kjun/ansi-substring.git
	cd ./ansi-substring
	npm install --dev
	npm test

##Usage

	var ansiSubstr = require('ansi-substring');

	var ansiString = '\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m';
	ansiSubstr(ansiString, 2, 4);

	> '\u001b[48;5;15m\u001b[38;5;9mst\u001b[39m\u001b[49m'

##LICENSE

MIT © [Seokjun Hong](https://github.com/se0kjun)
