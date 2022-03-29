const BigNumber = require('bignumber.js');
const chars = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function encode(hexStr) {
    decimal = new BigNumber(hexToDecimal(hexStr).trim());
    str = '';
    while ( decimal.isGreaterThan(1) ) {
        remainder = Math.floor(decimal.modulo(chars.length).toNumber());
        decimal = decimal.dividedBy(chars.length);
        str = chars[remainder] + str;
    }
    leading_zeros = hexStr.match(/^([0]+)/);
    return leading_zeros ? '1' * (leading_zeros[0].length / 2) + str : str;
}
function decode(base58Str) {
    return "decoder";
}

function asciiToHex(str) {
    let res = '';
    str.split('').map(i => {
        // if value is below base 16 add leading zeros
        s = "00" + (i.charCodeAt(0)).toString(16);
        res = res + s.substr(s.length-2) + ' ';
    });
    res = res.replace(/\s/g, '')
    return res;
}


function hexToDecimal(s) {
    var i, j, digits = [0], carry;
    for (i = 0; i < s.length; i += 1) {
        carry = parseInt(s.charAt(i), 16);
        for (j = 0; j < digits.length; j += 1) {
            digits[j] = digits[j] * 16 + carry;
            carry = digits[j] / 10 | 0;
            digits[j] %= 10;
        }
        while (carry > 0) {
            digits.push(carry % 10);
            carry = carry / 10 | 0;
        }
    }
    return digits.reverse().join('');
}

module.exports = { encode, decode, asciiToHex, hexToDecimal };
