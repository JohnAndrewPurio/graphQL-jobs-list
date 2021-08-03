import { useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { JOB_LISTS } from './api_calls/apolloSchemas'
import { useQuery } from 'react-apollo'
import { useDispatch } from 'react-redux'
import Home from './components/Home'
import Content from './components/Content'
import { cacheQueriedData } from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(JOB_LISTS)

  useEffect(() => {
    if (data)
      dispatch(cacheQueriedData(data))

    // eslint-disable-next-line 
  }, [data])

  if (loading)
    return (
      <div>
        Loading...
      </div>
    )

  if (error)
    return (
      <div>
        `Error! ${error.message}`
      </div>
    )


  return (
    <>
      <CssBaseline />
      <Home />
      <Content />
    </>
  )
}

export default App
