import React from 'react'
import styles from './TableRow.module.scss'

type Props = {
  children: React.ReactNode
  id?: string
  onMouseEnter?: React.MouseEventHandler<HTMLTableRowElement>
  onMouseLeave?: React.MouseEventHandler<HTMLTableRowElement>
}

const TableRow = (props: Props) => {
  const { children, onMouseEnter, onMouseLeave, id } = props

  return (
    <tr
      className={styles.tableRow}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
    >
      {children}
    </tr>
  )
}

export default TableRow
