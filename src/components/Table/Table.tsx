import React, { useState } from 'react'
import TableRow from './TableRow/TableRow'
import TableHeaderColumn from './TableHeaderColumn/TableHeaderColumn'
import { Epoch } from '../../types/epoch'
import { TableBodyCell } from './TableBodyCell'
import styles from './Table.module.scss'

import { TABLE_COLUMNS } from './Table.constants'
import { FilterValues } from '../../types/filters'
import { LinkButton } from '../LinkButton'
import { toFullDecimals } from '../../utils/helpers'
import { Avatar } from '../Avatar'
import { DelegateIcon } from '../Icons/DelegateIcon'

type Props = {
  epoches: Epoch[]
  handleSortByColumn: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void
  filters: FilterValues
}

const Table = (props: Props) => {
  const { epoches, handleSortByColumn, filters } = props
  const [hoveredRow, setHoveredRow] = useState('')

  const handleRowHover = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    setHoveredRow(e.currentTarget.id)
  }

  const handleRowHoverLeave = () => {
    setHoveredRow('')
  }

  return (
    <table className={styles.table}>
      <thead>
        <TableRow>
          {TABLE_COLUMNS.map((col) => (
            <TableHeaderColumn
              isActive={col.id === filters.orderBy}
              sortDir={filters.orderDirection}
              onClick={handleSortByColumn}
              id={col.id}
              key={col.id}
            >
              {col.label}
            </TableHeaderColumn>
          ))}
          <TableHeaderColumn className={styles.table__buttonCol} />
        </TableRow>
      </thead>
      <tbody>
        {epoches?.map((epoch) => (
          <TableRow
            key={epoch.id}
            id={epoch.id}
            onMouseEnter={handleRowHover}
            onMouseLeave={handleRowHoverLeave}
          >
            <TableBodyCell isActive={filters.orderBy === 'id'}>
              <div className={styles.table__avatarCell}>
                <Avatar id={epoch.id} />
                {epoch.id}
              </div>
            </TableBodyCell>
            <TableBodyCell
              label={`#${epoch.startBlock}`}
              isActive={filters.orderBy === 'startBlock'}
            />
            <TableBodyCell
              label={`#${epoch.endBlock}`}
              isActive={filters.orderBy === 'endBlock'}
            />
            <TableBodyCell isActive={filters.orderBy === 'totalQueryFees'}>
              <div>
                {toFullDecimals(Number(epoch.totalQueryFees))}
                <span className={styles.table__gtr}>GTR</span>
              </div>
            </TableBodyCell>
            <TableBodyCell isActive={filters.orderBy === 'totalRewards'}>
              <div>
                {toFullDecimals(Number(epoch.totalRewards))}
                <span className={styles.table__gtr}>GTR</span>
              </div>
            </TableBodyCell>
            <th className={styles.table__profileButton}>
              {hoveredRow === epoch.id && (
                <div className={styles.table__profileButton__cont}>
                  <LinkButton href={`/delegate/${epoch.id}`}>
                    <DelegateIcon />
                  </LinkButton>
                </div>
              )}
            </th>
          </TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default Table
