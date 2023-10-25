import React from 'react'
import styles from './TableRow.module.scss'

type Props = { children: React.ReactNode }

const TableRow = (props: Props) => {
  const { children } = props
  return <tr className={styles.tableRow}>{children}</tr>
}

export default TableRow
