## Solana keypair base58
The purpose of this repository is to provide an understanding of how to convert
bytes stored in keypair files produced by Solana's keypair generator to a base58 format.
Some interfaces may require this format in order to perform various actions on the Solana blockchain
in relation to the wallet.

You can also use the solana web3 javascript api to do base58 encoding using the key pair file generated, however the service does not provide encoding
of a private key.


SOLANA WEB3 doesn't provide a way to split your keypair into a private key - the whole keypair is considered when signing transactions and the public key provided is used to identify an account.
However we can convert the first half of the keypair bytes array and consider this the private key and store it as a somewhat more readable key.

*If you would like to retain ownership on your account remember to never share your private key!*

Encoding provided in both Ruby & Javascript. *Decoding currently only provided in Ruby.

Using solana web3

### NPM
$ npm install --save @solana/web3.js

### YARN
$ yarn add @solana/web3.js
