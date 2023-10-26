import { ReactNode } from 'react'

export type WalletProviderValues = {
  handleConnectWallet: () => void
  activeAccount: string
  loading: boolean
}

export type WalletProviderProps = {
  children: ReactNode
}
