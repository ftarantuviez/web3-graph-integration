import { gql } from 'graphql-request'
import { ResponseEpoches } from './types'
import client from '../client'
import { Epoch, EpochColumns } from '../../types/epoch'
import { TSortingOrder } from '../../types/filters'

export const getEpoches = async ({
  first,
  orderBy,
  orderDirection,
  querySearch,
}: {
  first: number
  orderBy: EpochColumns
  orderDirection: TSortingOrder
  querySearch: number
}): Promise<Epoch[]> => {
  const query = gql`
    query Query_GetEpoches($first: Int!, $orderBy: String!, $orderDirection: String!) {
      epoches(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
        id
        startBlock
        endBlock
        totalQueryFees
        totalRewards
      }
    }
  `

  let variables = {
    first,
    orderBy,
    orderDirection,
  }

  const queryEpochesResponse = await client.request<ResponseEpoches>(query, variables)

  return queryEpochesResponse?.epoches
}
