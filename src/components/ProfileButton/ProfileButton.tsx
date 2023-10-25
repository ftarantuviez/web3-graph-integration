import Link from 'next/link'
import React from 'react'
import styles from './ProfileButton.module.scss'
import { DelegateIcon } from '../Icons/DelegateIcon'

type Props = {}

export const ProfileButton = (props: Props) => {
  return (
    <Link href={'/'}>
      <button className={styles.profileButton}>
        <DelegateIcon />
      </button>
    </Link>
  )
}
