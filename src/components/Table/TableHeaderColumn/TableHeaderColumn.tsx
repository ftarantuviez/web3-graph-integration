import React from 'react'

import classNames from 'classnames/bind'

import styles from './TableHeaderColumn.module.scss'
import { ArrowBottom, ArrowTop } from '../../Icons'

import { EpochColumns } from '../../../types/epoch'
import { TSortingOrder } from '../../../types/filters'

type Props = {
  children?: React.ReactNode
  isActive?: boolean
  id?: EpochColumns
  onClick?: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void
  sortDir?: TSortingOrder
}

const cx = classNames.bind(styles)

const TableHeaderColumn = (props: Props) => {
  const { children, isActive, id, onClick, sortDir } = props

  const className = cx({
    tableHeaderColumn: true,
    active: isActive,
  })

  const isAscending = sortDir === 'asc'

  return (
    <th className={className} onClick={onClick} id={id}>
      {children}
      {isActive && (isAscending ? <ArrowBottom /> : <ArrowTop />)}
    </th>
  )
}
export default TableHeaderColumn
