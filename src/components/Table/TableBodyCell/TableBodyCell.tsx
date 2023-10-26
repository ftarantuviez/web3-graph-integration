import React from 'react'
import classNames from 'classnames/bind'

import styles from './TableBodyCell.module.scss'

type Props = {
  label?: string | number
  isActive?: boolean
  children?: React.ReactNode
}

const cx = classNames.bind(styles)

export const TableBodyCell = (props: Props) => {
  const { label, isActive, children } = props

  const className = cx({
    tableBodyCell: true,
    active: isActive,
  })

  return <th className={className}>{label ? label : children}</th>
}
