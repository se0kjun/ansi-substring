import test from 'ava';
import fn from './';

var testString = '\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m';
var testString2 = 'test\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m';
var testString3 = 'test\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtest';
var testString4 = 'test\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtest\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m';

test(t => {
	t.is(fn(testString, 0, 0), '');
	t.is(fn(testString, 1, 1), '');
	t.is(fn(testString, 0, 4), '\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m');
	t.is(fn(testString, 1, 4), '\u001b[48;5;15m\u001b[38;5;9mest\u001b[39m\u001b[49m');
	t.is(fn(testString, 1, 2), '\u001b[48;5;15m\u001b[38;5;9me\u001b[39m\u001b[49m');
	t.is(fn(testString, 1, 30), '\u001b[48;5;15m\u001b[38;5;9mest\u001b[39m\u001b[49m');

	t.is(fn(testString2, 1, 2), 'e');
	t.is(fn(testString2, 1, 3), 'es');
	t.is(fn(testString2, 1, 4), 'est');
	t.is(fn(testString2, 1, 5), 'est\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
	t.is(fn(testString2, 1, 6), 'est\u001b[48;5;15m\u001b[38;5;9mte\u001b[39m\u001b[49m');
	t.is(fn(testString2, 1, 7), 'est\u001b[48;5;15m\u001b[38;5;9mtes\u001b[39m\u001b[49m');
	t.is(fn(testString2, 1, 8), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m');
	t.is(fn(testString2, 4, 8), '\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m');

	t.is(fn(testString3, 1, 2), 'e');
	t.is(fn(testString3, 1, 3), 'es');
	t.is(fn(testString3, 1, 4), 'est');
	t.is(fn(testString3, 1, 5), 'est\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
	t.is(fn(testString3, 1, 6), 'est\u001b[48;5;15m\u001b[38;5;9mte\u001b[39m\u001b[49m');
	t.is(fn(testString3, 1, 7), 'est\u001b[48;5;15m\u001b[38;5;9mtes\u001b[39m\u001b[49m');
	t.is(fn(testString3, 1, 8), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49m');
	t.is(fn(testString3, 1, 9), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mt');
	t.is(fn(testString3, 1, 10), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mte');
	t.is(fn(testString3, 1, 11), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtes');
	t.is(fn(testString3, 4, 11), '\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtes');
	t.is(fn(testString3, 5, 11), '\u001b[48;5;15m\u001b[38;5;9mest\u001b[39m\u001b[49mtes');
	t.is(fn(testString3, 6, 11), '\u001b[48;5;15m\u001b[38;5;9mst\u001b[39m\u001b[49mtes');
	t.is(fn(testString3, 7, 11), '\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49mtes');
	t.is(fn(testString3, 8, 11), 'tes');

	t.is(fn(testString4, 1, 10), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mte');
	t.is(fn(testString4, 1, 11), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtes');
	t.is(fn(testString4, 1, 12), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtest');
	t.is(fn(testString4, 1, 13), 'est\u001b[48;5;15m\u001b[38;5;9mtest\u001b[39m\u001b[49mtest\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
	t.is(fn(testString4, 9, 13), 'est\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
	t.is(fn(testString4, 10, 13), 'st\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
	t.is(fn(testString4, 10, 13), 'st\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
	t.is(fn(testString4, 6, 13), '\u001b[48;5;15m\u001b[38;5;9mst\u001b[39m\u001b[49mtest\u001b[48;5;15m\u001b[38;5;9mt\u001b[39m\u001b[49m');
});
