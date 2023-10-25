import React from 'react'
import { SearchIcon } from '../Icons/SearchIcon'
import styles from './InputSearch.module.scss'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const InputSearch = (props: Props) => {
  const { onChange, value } = props
  return (
    <div className={styles.inputSearch}>
      <SearchIcon />
      <input onChange={onChange} value={value} placeholder="Search" />
    </div>
  )
}
