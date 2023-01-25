import { ethers } from "ethers";
const tokenAddress:string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const tokenHolderAddress = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];
const providerUrl = 'https://bsc-dataseed.binance.org/';

function formatTokenBalance(balance:string){
   const tokens =  ethers.utils.formatUnits(balance, 8);
   let [num, decimal] = tokens.split('.');
   num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   return [num, decimal].join('.');
}

function init(){
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const abi = [
        // Get the account balance
        "function balanceOf(address) view returns (uint)"
    ];

    const contract = new ethers.Contract(tokenAddress, abi, provider);

    tokenHolderAddress.map(async row =>{
        const balance = await contract.balanceOf(row);
        console.log(`${row} ${formatTokenBalance(balance._hex)}`)
    });
}

init();