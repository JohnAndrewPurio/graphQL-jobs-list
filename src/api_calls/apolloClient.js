import { ApolloClient, InMemoryCache } from '@apollo/client'
import { jobsListingEndpoint } from '../constants'

export const client = new ApolloClient({
    uri: jobsListingEndpoint,
    cache: new InMemoryCache()
})