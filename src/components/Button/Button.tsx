import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'
import { Loader } from '../Loader/Loader'
type Props = {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  isLoading: boolean
}

export const Button = (props: Props) => {
  const { children, onClick, isLoading } = props
  return (
    <button className={styles.button} onClick={onClick} disabled={isLoading}>
      {isLoading ? <Loader /> : children}
    </button>
  )
}
