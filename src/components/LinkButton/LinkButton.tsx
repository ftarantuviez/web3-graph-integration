import Link from 'next/link'
import React from 'react'
import styles from './ProfileButton.module.scss'

type Props = {
  href: string
  children?: React.ReactNode
}

export const LinkButton = (props: Props) => {
  const { children, href } = props
  return (
    <Link href={href}>
      <button className={styles.profileButton}>{children}</button>
    </Link>
  )
}
