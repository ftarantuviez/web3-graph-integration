import { gql } from 'graphql-request'
import { ResponseEpoches } from './types'
import client from '../client'
import { Epoch, EpochColumns } from '../../types/epoch'
import { TSortingOrder } from '../../types/filters'

export const getEpoches = async ({
  first,
  orderBy,
  orderDirection,
}: {
  first: number
  orderBy: EpochColumns
  orderDirection: TSortingOrder
}): Promise<Epoch[]> => {
  /* const query = gql`
    query GetEpoches($first: Number!, $orderBy: String!, $orderDirection: String!) {
      epoches(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
        id
        startBlock
        endBlock
        totalQueryFees
        totalRewards
      }
    }
  ` */
  const query = gql`
    {
      epoches(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
        id
        startBlock
        endBlock
        totalQueryFees
        totalRewards
      }
    }
  `

  const variables = {
    first,
    orderBy,
    orderDirection,
  }

  const queryEpochesResponse = await client.request<ResponseEpoches>(query, variables)

  return queryEpochesResponse?.epoches
}
