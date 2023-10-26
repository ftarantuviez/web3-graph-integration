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
  className?: string
}

const cx = classNames.bind(styles)

const TableHeaderColumn = (props: Props) => {
  const { children, isActive, id, onClick, sortDir, className } = props

  const classNames = cx(
    {
      tableHeaderColumn: true,
      active: isActive,
    },
    className,
  )

  const isAscending = sortDir === 'asc'

  return (
    <th className={classNames} onClick={onClick} id={id} align="center">
      <div>
        {isActive && (isAscending ? <ArrowBottom /> : <ArrowTop />)}
        {children}
      </div>
    </th>
  )
}
export default TableHeaderColumn
