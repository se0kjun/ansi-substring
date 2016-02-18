'use strict';

var ESCAPES = [
	'\u001b',
	'\u009b'
];

var END_CODE = 39;

var ESCAPE_CODES = {
	0: 0,
	1: 22,
	2: 22,
	3: 23,
	4: 24,
	7: 27,
	8: 28,
	9: 29,
	30: 39,
	31: 39,
	32: 39,
	33: 39,
	34: 39,
	35: 39,
	36: 39,
	37: 39,
	90: 39,
	40: 49,
	41: 49,
	42: 49,
	43: 49,
	44: 49,
	45: 49,
	46: 49,
	47: 49
};

function wrapAnsi(str) {
	var result = "";
	return result;
}

module.exports = function(str, start, end) {
	var originalString = str.replace(/\u001b\[.*?m/g, '');
	end = end || originalString.length;
	end = (originalString.length < end) ? originalString.length : end;
	var ansiRegex = new RegExp(/\u001b\[(\d+).*?m/g);
	var ansiResult = ansiRegex.exec(str);
	var ansiCursor = 0;//ansiRegex.lastIndex;
	var stringCursor = 0;
	var resultString = "";
	var pair = [];

	do {
		if (ansiCursor < ansiResult.index) {
			var tmpCursor = stringCursor + (ansiResult.index - ansiCursor);
			console.log("tmp: " + tmpCursor);
			console.log("string: " + stringCursor);
			console.log("ansi: " + ansiCursor);

			if (stringCursor >= start && tmpCursor <= end) {
				console.log("1");
				resultString += originalString.substring(stringCursor, ansiResult.index);
			}
			else if (stringCursor <= start && tmpCursor >= start && tmpCursor <= end) {
				console.log("2");
				resultString += originalString.substring(start, ansiResult.index);
			}
			else if (stringCursor <= end && tmpCursor >= end && stringCursor >= start) {
				console.log("3");
				resultString += 
					(originalString.substring(stringCursor, end));
				break;
			}
			else if (stringCursor <= start && tmpCursor >= end) {
				console.log("4");
				resultString += 
					(originalString.substring(start, end));
				break;
			}
		}

		stringCursor += (ansiResult.index - ansiCursor);
		if (stringCursor >= end)
			break;
		resultString += ansiResult;
		ansiCursor = ansiRegex.lastIndex;
	} while((ansiResult = ansiRegex.exec(str)) != null);

	return resultString;
};
