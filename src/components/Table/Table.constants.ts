import { EpochColumns } from '../../types/epoch'

export const TABLE_COLUMNS: { id: EpochColumns; label: string }[] = [
  { id: 'id', label: 'ID' },
  { id: 'startBlock', label: 'Start block' },
  { id: 'endBlock', label: 'End block' },
  { id: 'totalQueryFees', label: 'Query fees' },
  { id: 'totalRewards', label: 'Total rewards' },
]
