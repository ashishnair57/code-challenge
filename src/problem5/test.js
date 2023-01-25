const { ethers } = require("ethers");
const { abi } = require("./artifacts/contracts/TokenBalance.sol/TokenBalance.json");

const PROXY_TOKEN_ADDRESS = "0xfC1E121d9fbc7fb88BEBAC2CC5624b11fcC03E35";   // your contract address
const ABI = abi // your contract ABI

const ADDRESS = "0x5cedaf8a225f4b3d34cc5efdda58360bcd288abb"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x8516Fc284AEEaa0374E66037BD2309349FF728eA"
];

const providerUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545';

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(providerUrl);
// const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(PROXY_TOKEN_ADDRESS, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);
	let result = [];
	balances.map(([token, bal]) => {
		result.push({
			token: token,
			balance: bal._hex
		});
    });
	
	return result;
};

test().then(console.log);