// Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}
console.log(countWords("This is a sample paragraph with several words."));