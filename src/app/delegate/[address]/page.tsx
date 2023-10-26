'use client'
import React from 'react'
import { ArrowLeft } from '../../../components/Icons/ArrowLeft'
import { DelegateIcon } from '../../../components/Icons/DelegateIcon'
import styles from '../../../styles/pages/Delegate.module.scss'

import { LinkButton } from '../../../components/LinkButton'
import { Avatar } from '../../../components/Avatar'

const Delegate = ({ params }: { params: { address: string } }) => {
  return (
    <div className={styles.delegate}>
      <LinkButton href="/">
        <ArrowLeft />
      </LinkButton>

      <Avatar id={params.address as string} size="lg" />
      <div className={styles.delegate__content}>
        <div className={styles.delegate__info}>
          <span>
            <DelegateIcon />
          </span>
          <p>Delegate</p>
        </div>
        <h4>0x053---943b8</h4>
      </div>
    </div>
  )
}

export default Delegate
