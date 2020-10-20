const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '|space|':  ' ',
};

function decode(expr) {
    let result = '';
  
    let regexpSpl = /.{10}/g;
  
    let regexp11 = /(11)/g;
    let regexp10 = /(10)/g;
    let regexpSpace = /(\*\*\*\*\*\*\*\*\*\*)/g;
    let regexpZeros = /(0)/g;
  
    let start = expr.replace(regexpSpl, function(a) { return a + ' ' });
        
    let newstr11 = start.replace(regexp11, '-');
    let newstr12 = newstr11.replace(regexp10, '.');
    let newstrNotSpaces = newstr12.replace(regexpSpace, ' |space| ');
    let newstrNotZeros = newstrNotSpaces.replace(regexpZeros, ' ');
    
    let arr = newstrNotZeros.split(' ');
  
    for(let elem of arr) {
      if(elem !== '') {
        result += MORSE_TABLE[elem];
      }
    }
 
    return result;
}

module.exports = {
    decode
}