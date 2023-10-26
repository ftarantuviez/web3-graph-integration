import React from 'react'
import classNames from 'classnames/bind'

import styles from './TableBodyCell.module.scss'

type Props = {
  label?: string | number
  isActive?: boolean
  children?: React.ReactNode
  className?: string
}

const cx = classNames.bind(styles)

export const TableBodyCell = (props: Props) => {
  const { label, isActive, children, className } = props

  const classNames = cx(
    {
      tableBodyCell: true,
      active: isActive,
    },
    className,
  )

  return <th className={classNames}>{label ? label : children}</th>
}
