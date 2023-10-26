/* eslint-disable import/no-anonymous-default-export */
import { useContext } from 'react'

import { WalletProviderValues } from './types'
import { WalletContext } from '.'

export default () => useContext<WalletProviderValues>(WalletContext)
