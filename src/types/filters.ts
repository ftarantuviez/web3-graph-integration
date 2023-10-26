import { EpochColumns } from './epoch'

export type TSortingOrder = 'asc' | 'desc'

export type FilterValues = {
  first: number
  orderBy: EpochColumns
  orderDirection: TSortingOrder
  query?: string
}
