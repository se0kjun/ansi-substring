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

module.exports = function(str, start, end) {
	var originalString = str.replace(/\u001b\[.*?m/g, '');
	var ansiRegex = new RegExp(/\u001b\[.*?m/g);
	var ansiResult = ansiRegex.exec(str);
	var ansiCursor = ansiRegex.lastIndex;
	var stringCursor = 0;
	var resultString = "";

	do {
		// console.log(ansiResult);
		// console.log(ansiCursor);
		// console.log(stringCursor);
		// console.log(ansiResult.index);
		// if (ansiCursor == ansiResult.index) {
		// 	resultString += ansiResult;
		// 	ansiCursor = ansiRegex.lastIndex;
		// }
		console.log(stringCursor);
		
		if (ansiCursor < ansiResult.index) {
			var tmpCursor = stringCursor + (ansiResult.index - ansiCursor);

			if (stringCursor > start && tmpCursor < end) {
				console.log("tes2t");
				resultString += str.substring(ansiCursor, ansiResult.index);
			}
			else if (stringCursor < start && tmpCursor > start) {
				resultString += str.substring(ansiCursor + (start - stringCursor), ansiResult.index);
			}
			else if (stringCursor < end && tmpCursor > end) {
				resultString += str.substring(ansiCursor, ansiCursor + (end - stringCursor));
				break;
			}
			else {
				resultString += str.substring(ansiCursor + (start - stringCursor), 
					ansiCursor + (end - stringCursor));
				break;
			}
		}

		ansiCursor = ansiRegex.lastIndex;
		stringCursor += (ansiResult.index - ansiCursor);
		resultString += ansiResult;
	} while((ansiResult = ansiRegex.exec(str)) != null);

	return resultString;
};
