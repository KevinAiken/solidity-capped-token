# solidity-capped-token

This is an assignment for Georgia State University's blockchain course 
based on [this tutorial](https://medium.com/crowdbotics/how-to-build-a-simple-capped-crowdsale-token-using-openzeppelin-library-part-1-2789ec642308).

The assignment sheet for this is included in the repo as "Homework3.pdf"

## Setup

Follow these steps to run this application. This project was developed on a Ubuntu machine so steps may vary for other
operating systems.

Install npm:  https://www.npmjs.com/get-npm

Run the following commands from terminal in the project directory:

```sudo npm -g install truffle@4.1.14```

```npm install``` 

```truffle compile```

```truffle develop```

``migrate --reset --all``

You're now in the truffle prompt and ready to use the application. Example commands of what you can do with the program
are below.

## Tutorial Transactions

```
truffle(develop)> ExampleToken.deployed("Example Token", "EXM", 18).then((t) => {token = t;})
undefined
```

I swapped the order of the next two tutorial transactions and slightly modified one to make them work with my 
configuration. I'm not sure what the issue was, but after this change everything worked as expected. 

The specific change was token.transferOwnership(sale.address) to token.transferOwnership(ExampleTokenCrowdSale.address) 
and running that before declaring the sale instance.

```
truffle(develop)> token.transferOwnership(ExampleTokenCrowdsale.address)
{ tx: '0x1d30fb0c3c5a7379831f466ff96daeb962e701e9066c8bcf1cb2bf3d20ac6c51',
  receipt: 
   { transactionHash: '0x1d30fb0c3c5a7379831f466ff96daeb962e701e9066c8bcf1cb2bf3d20ac6c51',
     transactionIndex: 0,
     blockHash: '0x6312f511f18064e34240682ffc6bdfcf9824930deee7b1d7d2e14d2e5e4e1100',
     blockNumber: 6,
     gasUsed: 30626,
     cumulativeGasUsed: 30626,
     contractAddress: null,
     logs: [ [Object] ],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010800000000000000001000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000010000000002000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000010000000000002' },
  logs: 
   [ { logIndex: 0,
       transactionIndex: 0,
       transactionHash: '0x1d30fb0c3c5a7379831f466ff96daeb962e701e9066c8bcf1cb2bf3d20ac6c51',
       blockHash: '0x6312f511f18064e34240682ffc6bdfcf9824930deee7b1d7d2e14d2e5e4e1100',
       blockNumber: 6,
       address: '0x345ca3e014aaf5dca488057592ee47305d9b3e10',
       type: 'mined',
       event: 'OwnershipTransferred',
       args: [Object] } ] }
       
```

```
truffle(develop)> ExampleTokenCrowdsale.deployed(500, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(200, 'ether'))).then((t) => {sale = t;})
undefined
```

```
truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(2, 'ether')) , from : web3.eth.accounts[1]});
{ tx: '0x73c999ecf1e33b658d46a5bec53fbcf9d307e4893e693398ca4feb2effcffd65',
  receipt: 
   { transactionHash: '0x73c999ecf1e33b658d46a5bec53fbcf9d307e4893e693398ca4feb2effcffd65',
     transactionIndex: 0,
     blockHash: '0xde5bad95626eaf5e32d662d140b611af98113aae5e019c17bb1c15b409e35c19',
     blockNumber: 8,
     gasUsed: 122553,
     cumulativeGasUsed: 122553,
     contractAddress: null,
     logs: [ [Object], [Object], [Object] ],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000010000004000000000000010000000000000000000000020000000000000000000000000000000000000000000000000000000000020000000000008000000000000000000010000000080000000000000000000020000000000000000000800000000000000400000000010000000040000000000010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000002000000000000000000000000000000002000000000000000000000000000000000000004000000000000020000000000000000000000000000000000000000000000020000010000000000000' },
  logs: 
   [ { logIndex: 2,
       transactionIndex: 0,
       transactionHash: '0x73c999ecf1e33b658d46a5bec53fbcf9d307e4893e693398ca4feb2effcffd65',
       blockHash: '0xde5bad95626eaf5e32d662d140b611af98113aae5e019c17bb1c15b409e35c19',
       blockNumber: 8,
       address: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
       type: 'mined',
       event: 'TokenPurchase',
       args: [Object] } ] }

```

```
truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(48, 'ether')) , from : web3.eth.accounts[1]});
{ tx: '0x36ca9086f22585e7c62329471f804f4c9548fe1cd216b40805f6a6ece8a83328',
  receipt: 
   { transactionHash: '0x36ca9086f22585e7c62329471f804f4c9548fe1cd216b40805f6a6ece8a83328',
     transactionIndex: 0,
     blockHash: '0xf0c90a6a4bfc192903ec4119a424aa074fbca46361510fcd4110888ae4502163',
     blockNumber: 9,
     gasUsed: 62553,
     cumulativeGasUsed: 62553,
     contractAddress: null,
     logs: [ [Object], [Object], [Object] ],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000010000004000000000000010000000000000000000000020000000000000000000000000000000000000000000000000000000000020000000000008000000000000000000010000000080000000000000000000020000000000000000000800000000000000400000000010000000040000000000010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000002000000000000000000000000000000002000000000000000000000000000000000000004000000000000020000000000000000000000000000000000000000000000020000010000000000000' },
  logs: 
   [ { logIndex: 2,
       transactionIndex: 0,
       transactionHash: '0x36ca9086f22585e7c62329471f804f4c9548fe1cd216b40805f6a6ece8a83328',
       blockHash: '0xf0c90a6a4bfc192903ec4119a424aa074fbca46361510fcd4110888ae4502163',
       blockNumber: 9,
       address: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
       type: 'mined',
       event: 'TokenPurchase',
       args: [Object] } ] }

```


```
truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(1, 'ether')) , from : web3.eth.accounts[1]});
Error: VM Exception while processing transaction: revert
    at XMLHttpRequest._onHttpResponseEnd (/usr/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at XMLHttpRequest._setReadyState (/usr/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest.request.onreadystatechange (/usr/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at /usr/lib/node_modules/truffle/build/webpack:/~/truffle-provider/wrapper.js:134:1
    at /usr/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at Object.InvalidResponse (/usr/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)

```

## Assignment Modifications

For modification 1 the code was changed to ```uint256 public investorMinCap = 5000000000000000000; ``` from 
```uint256 public investorMinCap = 2000000000000000000;``` to change the cap in ExampleTokenCrowdsale.sol.

For modification 2 the following method was added to ExampleTokenCrowdsale.sol: 
```
function getTokensLeft() public view returns (uint256){
           return cap-weiRaised;
       }       
```


## Assignment Transactions

Setup with assignment parameters after cleaning previous network.

```
truffle(develop)> ExampleToken.deployed("CSC4980 Token", "GSU", 18).then((t) => {token = t;})
undefined

truffle(develop)> token.transferOwnership(ExampleTokenCrowdsale.address)
{ tx: '0x1d30fb0c3c5a7379831f466ff96daeb962e701e9066c8bcf1cb2bf3d20ac6c51',
  receipt: 
   { transactionHash: '0x1d30fb0c3c5a7379831f466ff96daeb962e701e9066c8bcf1cb2bf3d20ac6c51',
     transactionIndex: 0,
     blockHash: '0xb1741ef89c0cd3954db04742261a6244f70e550e00f17290882883b4d26891f7',
     blockNumber: 6,
     gasUsed: 30626,
     cumulativeGasUsed: 30626,
     contractAddress: null,
     logs: [ [Object] ],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010800000000000000001000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000010000000002000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000010000000000002' },
  logs: 
   [ { logIndex: 0,
       transactionIndex: 0,
       transactionHash: '0x1d30fb0c3c5a7379831f466ff96daeb962e701e9066c8bcf1cb2bf3d20ac6c51',
       blockHash: '0xb1741ef89c0cd3954db04742261a6244f70e550e00f17290882883b4d26891f7',
       blockNumber: 6,
       address: '0x345ca3e014aaf5dca488057592ee47305d9b3e10',
       type: 'mined',
       event: 'OwnershipTransferred',
       args: [Object] } ] }


truffle(develop)> ExampleTokenCrowdsale.deployed(450, web3.eth.accounts[0], token.address, new web3.BigNumber(web3.toWei(150, 'ether'))).then((t) => {sale = t;})
undefined
```


Transaction 1, attempt to buy 2.5 ether:

```
truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(2.5, 'ether')) , from : web3.eth.accounts[1]});
Error: VM Exception while processing transaction: revert
    at XMLHttpRequest._onHttpResponseEnd (/usr/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at XMLHttpRequest._setReadyState (/usr/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest.request.onreadystatechange (/usr/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at /usr/lib/node_modules/truffle/build/webpack:/~/truffle-provider/wrapper.js:134:1
    at /usr/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at Object.InvalidResponse (/usr/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
```

Transaction 2, buy tokens with 15 ether

```
truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(15, 'ether')) , from : web3.eth.accounts[1]});
{ tx: '0xd8be7f43457b6595b86f5e84e9123d7cb5861442d1ff9989bfd45f446fa18567',
  receipt: 
   { transactionHash: '0xd8be7f43457b6595b86f5e84e9123d7cb5861442d1ff9989bfd45f446fa18567',
     transactionIndex: 0,
     blockHash: '0x9280a7a0d561a1e68b0d6200c2976ff708448393f0f3eefad8977f906ddb979e',
     blockNumber: 8,
     gasUsed: 122575,
     cumulativeGasUsed: 122575,
     contractAddress: null,
     logs: [ [Object], [Object], [Object] ],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000010000004000000000000010000000000000000000000020000000000000000000000000000000000000000000000000000000000020000000000008000000000000000000010000000080000000000000000000020000000000000000000800000000000000400000000010000000040000000000010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000002000000000000000000000000000000002000000000000000000000000000000000000004000000000000020000000000000000000000000000000000000000000000020000010000000000000' },
  logs: 
   [ { logIndex: 2,
       transactionIndex: 0,
       transactionHash: '0xd8be7f43457b6595b86f5e84e9123d7cb5861442d1ff9989bfd45f446fa18567',
       blockHash: '0x9280a7a0d561a1e68b0d6200c2976ff708448393f0f3eefad8977f906ddb979e',
       blockNumber: 8,
       address: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
       type: 'mined',
       event: 'TokenPurchase',
       args: [Object] } ] }
```

Transaction 3, return how many tokens are left:

```
truffle(develop)> sale.getTokensLeft();
BigNumber { s: 1, e: 20, c: [ 1850000 ] }
```

Grad Student Transaction 4, buy tokens with 25 ether: 

```
truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(25, 'ether')) , from : web3.eth.accounts[1]});
{ tx: '0xd7b61ad1f035209863b541f78a181a443efeaafbf022b09cbf5ffdeb9cf8e1c0',
 receipt: 
  { transactionHash: '0xd7b61ad1f035209863b541f78a181a443efeaafbf022b09cbf5ffdeb9cf8e1c0',
    transactionIndex: 0,
    blockHash: '0x4b2fb674e7b8db168484d5f8741b194144f05692d3a3bbf91c5dec4a44baba68',
    blockNumber: 9,
    gasUsed: 62575,
    cumulativeGasUsed: 62575,
    contractAddress: null,
    logs: [ [Object], [Object], [Object] ],
    status: '0x01',
    logsBloom: '0x00000000000000000000000000000000010000004000000000000010000000000000000000000020000000000000000000000000000000000000000000000000000000000020000000000008000000000000000000010000000080000000000000000000020000000000000000000800000000000000400000000010000000040000000000010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000002000000000000000000000000000000002000000000000000000000000000000000000004000000000000020000000000000000000000000000000000000000000000020000010000000000000' },
 logs: 
  [ { logIndex: 2,
      transactionIndex: 0,
      transactionHash: '0xd7b61ad1f035209863b541f78a181a443efeaafbf022b09cbf5ffdeb9cf8e1c0',
      blockHash: '0x4b2fb674e7b8db168484d5f8741b194144f05692d3a3bbf91c5dec4a44baba68',
      blockNumber: 9,
      address: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
      type: 'mined',
      event: 'TokenPurchase',
      args: [Object] } ] }
```
