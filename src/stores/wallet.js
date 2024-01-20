import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    walletAddress: ''
  }),
  actions: {
    setWalletAddress(address) {
      this.walletAddress = address
    }
  }
})
