export interface Epoch {
  endBlock: number
  startBlock: number
  id: string
  totalQueryFees: string
  totalRewards: string
}

export type EpochColumns = keyof Epoch
