import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    walletAddress: ''
  }),
  actions: {
    setWalletAddress(address) {
      console.log('Setting wallet address in store:', address)
      this.walletAddress = address
    }
  }
})
