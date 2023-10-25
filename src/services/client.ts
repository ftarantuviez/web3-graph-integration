import { GraphQLClient } from 'graphql-request'

const protocolUrl = process.env.NEXT_PUBLIC_NETWORK_HTTP_URI ?? ''

const client = new GraphQLClient(protocolUrl)

export default client
