import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { EpochesProvider } from './EpochesContext'

type Props = {
  children: React.ReactNode
}

const ContextProviderManager = (props: Props) => {
  const { children } = props
  return (
    <Provider store={store}>
      <EpochesProvider>{children}</EpochesProvider>
    </Provider>
  )
}

export default ContextProviderManager
