const web3 = require('@solana/web3.js');
const fs = require('fs'); 
const base58 = require('./base58.js');

// USING SOLANA WEB3 TO GET PUBLIC KEY
let keypair_in_bytes = JSON.parse(fs.readFileSync('./example_keys.json', 'utf8'));

let keypair = web3.Keypair.fromSecretKey(new Uint8Array(keypair_in_bytes));

console.log("Public Key using web3:", keypair.publicKey.toBase58());

// SOLANA WEB3 doesn't provide a way to split your keypair into a private key - the whole keypair is considered your secretKey.
// However we can convert the first half of the keypair bytes array and consider this the private key.
// I doubt something will ask for a private key in this format but you could use this for your own security purposes.

let keyPairStr = String.fromCharCode(...keypair_in_bytes);
let publicKeyStr = String.fromCharCode(...(keypair_in_bytes.splice(Math.ceil(keypair_in_bytes.length / 2))));
// Splice mutates the array it is called on. Remaining bytes represent the private key.
let privateKeyStr = String.fromCharCode(...keypair_in_bytes);

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
console.log('Keypair:', base58.encode(asciiToHex(keyPairStr)));
console.log('Public Key:', base58.encode(asciiToHex(publicKeyStr)));
console.log('Private key:', base58.encode(asciiToHex(privateKeyStr)));