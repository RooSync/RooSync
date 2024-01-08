// utils.js
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/vue'
import { ethers } from 'ethers'

export const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

export const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

export function setupWeb3Modal(projectId) {
  return createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    tokens: {
      1: {
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        image:
          'https://www.logo.wine/a/logo/Ethereum_Classic/Ethereum_Classic-Logo.wine.svg'
      },
      137: {
        address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
        image:
          'https://www.logo.wine/a/logo/Ethereum_Classic/Ethereum_Classic-Logo.wine.svg'
      }
    },
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Minecrafter_Reg',
      '--w3m-accent': '#FDB10D',
      '--w3m-font-size-master': '11px',
      '--w3m-border-radius-master': '1px'
    }
  })
}

export async function connectWallet(modal) {
  try {
    await modal.open()
    const provider = modal.provider.value
    const web3Provider = new ethers.providers.Web3Provider(provider)
    const accounts = await web3Provider.listAccounts()
    return accounts[0] || null
  } catch (error) {
    console.error('Error connecting to wallet:', error)
    console.log('Modal object:', modal)
    console.log('Provider:', modal.provider)
    return null
  }
}
