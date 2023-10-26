'use client'

import { createContext, FC, useEffect, useState } from 'react'
import { WalletProviderProps, WalletProviderValues } from './types'

export const WalletContext = createContext<WalletProviderValues>({
  activeAccount: '',
  loading: false,
  handleConnectWallet: () => {},
})

const WalletProvider: FC<WalletProviderProps> = ({ children }) => {
  const [activeAccount, setActiveAccount] = useState('')
  const [loading, setLoading] = useState(false)

  const isMetaMaskInstalled = () => {
    return Boolean(window?.ethereum && window?.ethereum?.isMetaMask)
  }

  const handleConnectWallet = () => {
    const isMetaMask = isMetaMaskInstalled()
    if (isMetaMask) {
      window?.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => setActiveAccount(accounts[0]))
    } else {
      alert('Install metamask extension!!')
    }
  }

  const getAccounts = async () => {
    setLoading(true)
    try {
      const { ethereum } = window
      const accounts = await ethereum?.request({ method: 'eth_accounts' })
      setLoading(false)
      if (accounts.length > 0) {
        setActiveAccount(accounts[0])
      }
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAccounts()
  }, [])

  if (typeof window !== 'undefined') {
    window?.ethereum?.on('accountsChanged', async (accounts: string[]) => {
      if (accounts.length === 0) setActiveAccount('')
      else setActiveAccount(accounts[0])
    })
  }

  const values: WalletProviderValues = {
    activeAccount,
    loading,
    handleConnectWallet,
  }

  return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
}

export default WalletProvider
