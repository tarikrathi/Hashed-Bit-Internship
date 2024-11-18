//Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str = "amjad rathi and sakir rathi";
let vowels = (str.match(/[aeiou]/gi) || []).length;
let consonants = (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;

console.log("Vowels:", vowels, "Consonants:", consonants);
