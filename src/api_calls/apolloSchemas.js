import { gql } from '@apollo/client'

export const JOB_LISTS = gql`
    query {
	    jobs {
            id
            applyUrl
            title
            description
            tags {
                name
            }
            cities {
                name
            }
        }
    }
`