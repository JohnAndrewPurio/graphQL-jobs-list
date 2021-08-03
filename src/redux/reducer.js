import { CACHE_QUERIED_DATA } from './action_types'

const initState = {
    data: null
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[CACHE_QUERIED_DATA] = cacheQueriedData

    if(!selector[type]) return {...state}

    return selector[type](state, payload)
}

function cacheQueriedData(state, payload) {
    return {...state, data: payload}
}

