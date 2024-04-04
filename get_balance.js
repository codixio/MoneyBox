require('dotenv').config();
const { Web3 } = require('web3');
const web3 = new Web3(process.env.WEB3_URL);
const abi = require('./ABI.json');
const contract = new web3.eth.Contract(abi, process.env.TO_ADDRESS);

const getBalance = async() => {
    const balance = await contract.methods.balance.call().call();
    console.log('Current balance: ' + balance);
}

getBalance();