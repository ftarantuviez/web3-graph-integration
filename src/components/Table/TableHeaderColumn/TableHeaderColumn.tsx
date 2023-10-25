import React from 'react'

import classNames from 'classnames/bind'

import styles from './TableHeaderColumn.module.scss'
import { ArrowBottom } from '../../Icons'

type Props = { children: React.ReactNode; isActive?: boolean }

const cx = classNames.bind(styles)

const TableHeaderColumn = (props: Props) => {
  const { children, isActive } = props

  const className = cx({
    tableHeaderColumn: true,
    active: isActive,
  })

  return (
    <th className={className}>
      <ArrowBottom />
      {children}
    </th>
  )
}
export default TableHeaderColumn
