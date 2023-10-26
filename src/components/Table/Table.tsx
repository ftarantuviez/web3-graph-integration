import React, { useState } from 'react'
import TableRow from './TableRow/TableRow'
import TableHeaderColumn from './TableHeaderColumn/TableHeaderColumn'
import { Epoch } from '../../types/epoch'
import { TableBodyCell } from './TableBodyCell'
import styles from './Table.module.scss'

import { TABLE_COLUMNS } from './Table.constants'
import { FilterValues } from '../../types/filters'
import { ProfileButton } from '../ProfileButton'
import { nFormatter, toFullDecimals } from '../../utils/helpers'

type Props = {
  epoches: Epoch[]
  handleSortByColumn: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void
  filters: FilterValues
}

const Table = (props: Props) => {
  const { epoches, handleSortByColumn, filters } = props
  const [hoveredRow, setHoveredRow] = useState('')

  const handleRowHover = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    console.log(e.currentTarget.id)
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
          <TableHeaderColumn />
        </TableRow>
      </thead>
      <tbody>
        {epoches?.slice(0, 4).map((epoch) => (
          <TableRow
            key={epoch.id}
            id={epoch.id}
            onMouseEnter={handleRowHover}
            onMouseLeave={handleRowHoverLeave}
          >
            <TableBodyCell label={epoch.id} isActive={filters.orderBy === 'id'} />
            <TableBodyCell
              label={`#${epoch.startBlock}`}
              isActive={filters.orderBy === 'startBlock'}
            />
            <TableBodyCell
              label={`#${epoch.endBlock}`}
              isActive={filters.orderBy === 'endBlock'}
            />
            <TableBodyCell
              label={toFullDecimals(Number(epoch.totalQueryFees))}
              isActive={filters.orderBy === 'totalQueryFees'}
            />
            <TableBodyCell
              label={toFullDecimals(Number(epoch.totalRewards))}
              isActive={filters.orderBy === 'totalRewards'}
            />
            <th className={styles.table__profileButton}>
              {hoveredRow === epoch.id && <ProfileButton />}
            </th>
          </TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default Table
