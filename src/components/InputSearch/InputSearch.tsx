import React from 'react'
import { SearchIcon } from '../Icons/SearchIcon'
import styles from './InputSearch.module.scss'
import { CloseIcon } from '../Icons'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  handleResetInput: () => void
}

export const InputSearch = (props: Props) => {
  const { onChange, value, handleResetInput } = props
  return (
    <div className={styles.inputSearch}>
      {value ? (
        <span onClick={handleResetInput}>
          <CloseIcon />
        </span>
      ) : (
        <SearchIcon />
      )}
      <input onChange={onChange} value={value} placeholder="Search" />
    </div>
  )
}
