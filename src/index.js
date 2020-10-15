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
};

function decode(expr) {
    let separatedString = expr.match(/.{1,10}/g)

    let decodedArray = separatedString.map(function (letter) {
        let morseKey = ''
        if (letter === '**********') {
            return morseKey = ' '
        } else {
            for (let i = 10; i > 0; i -= 2) {
                let code = letter.slice(i - 2, i)

                if (code === '11') {
                    morseKey += '-'
                } else if (code === '10') {
                    morseKey += '.'
                }
            }
        }

        morseKey = MORSE_TABLE[morseKey.split('').reverse().join('')]

        return morseKey
    })

    return decodedArray.join('')
}

module.exports = {
    decode
}