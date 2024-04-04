require('dotenv').config();
const { Web3 } = require('web3');
const web3 = new Web3(process.env.WEB3_URL);
const abi = require('./ABI.json');
const fromAddress = process.env.FROM_ADDRESS;
const toAddress = process.env.TO_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;

const sendMoney = async () => {
    const sendTransaction = await web3.eth.accounts.signTransaction(
        {
            to: toAddress,
            value: web3.utils.toWei("0.000002", "ether"),
            gas: await web3.eth.estimateGas(),
            gasPrice: await web3.eth.getGasPrice(),
            nonce: await web3.eth.getTransactionCount(fromAddress),
        },
        privateKey
    );

    web3.eth.sendSignedTransaction(sendTransaction.rawTransaction);
}

sendMoney();