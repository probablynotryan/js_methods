const alphabet = "abcdefg";
// const someNumber = 12345;

console.log(alphabet.charAt(0));

// 'a'

console.log(alphabet.charAt(2));

// 'c'

console.log(alphabet.charAt(-2));

// ''

console.log(alphabet.charAt(30));

// ''

// and console.log(someNumber.charAt(3));

// error, someNumber is not a string

console.log(alphabet.charAt(true));

// truthy makes this return 'b'
