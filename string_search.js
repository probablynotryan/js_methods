const rentence = "Wubba dubba lub dub";

const regArg = /u/gi;
const anotherArg = /z/gi;

console.log(rentence.search(regArg)); // 1 <-- index of first 'u'
console.log(rentence.search(anotherArg)); // - 1 <-- if nothing found
console.log(rentence.search(/b/gi)); // 2 <-- index of first 'b'
