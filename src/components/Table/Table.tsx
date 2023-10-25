import React from 'react'
import TableRow from './TableRow/TableRow'
import TableHeaderColumn from './TableHeaderColumn/TableHeaderColumn'
import { Epoch } from '../../types/epoch'

type Props = {
  epoches: Epoch[]
}

const Table = (props: Props) => {
  const { epoches } = props
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Start block</TableHeaderColumn>
          <TableHeaderColumn>End block</TableHeaderColumn>
          <TableHeaderColumn>Query fees</TableHeaderColumn>
          <TableHeaderColumn>Total rewards</TableHeaderColumn>
        </TableRow>
      </thead>
      <tbody>
        {epoches?.slice(0, 5).map((epoch) => (
          <TableRow key={epoch.id}>
            <th style={{ padding: '10px' }}>{epoch.id}</th>
            <th style={{ padding: '10px' }}>{epoch.startBlock}</th>
            <th style={{ padding: '10px' }}>{epoch.endBlock}</th>
            <th style={{ padding: '10px' }}>{epoch.totalQueryFees}</th>
            <th style={{ padding: '10px' }}>{epoch.totalRewards}</th>
          </TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default Table
