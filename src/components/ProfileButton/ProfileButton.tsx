import Link from 'next/link'
import React from 'react'
import styles from './ProfileButton.module.scss'
import { DelegateIcon } from '../Icons/DelegateIcon'

type Props = {
  address?: string
}

export const ProfileButton = (props: Props) => {
  const { address = '' } = props
  return (
    <Link href={`/delegate/${address}`}>
      <button className={styles.profileButton}>
        <DelegateIcon />
      </button>
    </Link>
  )
}
