# Utility Contract project with hardhat

### Install dependency
```shell
npm install
```

### Compile contract
```shell
npx hardhat compile
```

### Deploy contract
```shell
npx hardhat run scripts/deploy.js
``` 

### Sample secrets
To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words.
```shell
Sample secrets.json
{
    "mnemonic": "Your_12_Word_MetaMask_Seed_Phrase"
}
``` 

### Run test

```shell
node test.js
``` 