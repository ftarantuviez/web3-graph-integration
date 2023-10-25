import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'
type Props = {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: Props) => {
  const { children, onClick } = props
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
