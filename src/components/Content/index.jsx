import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import JobCard from '../JobCard'

export default function Content() {
    const data = useSelector(state => state.data)

    return (
        <Grid container>
            {
                data?.jobs.map(({ cities, tags, title, id, applyUrl, description }, index) => (
                    <Grid key={id} item xs={4}>
                        <JobCard cities={cities} tags={tags} title={title} applyUrl={applyUrl} description={description} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
