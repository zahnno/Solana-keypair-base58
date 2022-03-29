The purpose of this repository is to provide readers the understanding of how to convert
bytes stored in keypair files produced by Solana's keypair generator to a base58 format.
Some interfaces may require this format in order to perform various actions on the Solana blockchain
in relation to the wallet.

You can also use the solana npm modules to do the encoding using the key pair file generated but this is mean't to elaborate
off the process.

If you would like to retain ownership on your account remember to never share your private key.

SOLANA WEB3 doesn't provide a way to split your keypair into a private key - the whole keypair is considered to sign transactions and the public key provided is used to identify the account.
However we can convert the first half of the keypair bytes array and consider this the private key.
I doubt something will ask for a private key in this format but you could use this for your own security purposes.

Examples are provided in both Ruby & Javascript.

Using solana web3 (Internet required)

$ npm install --save @solana/web3.js

||

$ yarn add @solana/web3.js