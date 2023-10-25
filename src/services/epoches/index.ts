import { gql } from 'graphql-request'
import { ResponseEpoches } from './types'
import client from '../client'
import { Epoch } from '../../types/epoch'

export const getEpoches = async (): Promise<Epoch[]> => {
  const query = gql`
    {
      epoches {
        id
        startBlock
        endBlock
        totalQueryFees
        totalRewards
      }
    }
  `

  const variables = {}

  const queryEpochesResponse = await client.request<ResponseEpoches>(query, variables)

  return queryEpochesResponse?.epoches
}
