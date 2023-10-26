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
            <TableBodyCell
              label={toFullDecimals(Number(epoch.totalQueryFees))}
              isActive={filters.orderBy === 'totalQueryFees'}
            />
            <TableBodyCell
              label={toFullDecimals(Number(epoch.totalRewards))}
              isActive={filters.orderBy === 'totalRewards'}
            />
            <th className={styles.table__profileButton}>
              {hoveredRow === epoch.id && (
                <LinkButton href={`/delegate/${epoch.id}`}>
                  <DelegateIcon />
                </LinkButton>
              )}
            </th>
          </TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default Table
