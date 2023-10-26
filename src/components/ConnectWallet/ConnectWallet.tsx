import React, { useMemo } from 'react'
import './styles.scss'
import useWalletContext from '../../contexts/WalletContext/useWalletContext'
import { LogoutIcon } from '../Icons/LogoutIcon'

type Props = {}

export const ConnectWallet = (props: Props) => {
  const { handleConnectWallet, activeAccount } = useWalletContext()

  const shorterAccount = useMemo(() => {
    if (!activeAccount) return ''

    return `${activeAccount.slice(0, 4)}--${activeAccount.slice(-4)}`
  }, [activeAccount])

  return (
    <button onClick={handleConnectWallet}>
      <a>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {activeAccount ? (
          <div className="logout">
            <LogoutIcon />
            {shorterAccount}
          </div>
        ) : (
          'Connect wallet'
        )}
      </a>
    </button>
  )
}
