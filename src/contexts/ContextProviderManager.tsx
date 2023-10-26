import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { EpochesProvider } from './EpochesContext'
import WalletProvider from './WalletContext'

type Props = {
  children: React.ReactNode
}

const ContextProviderManager = (props: Props) => {
  const { children } = props
  return (
    <Provider store={store}>
      <WalletProvider>
        <EpochesProvider>{children}</EpochesProvider>
      </WalletProvider>
    </Provider>
  )
}

export default ContextProviderManager
