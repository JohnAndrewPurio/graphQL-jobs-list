import { forwardRef, useState } from 'react'
import {
   Button, Dialog, Divider, DialogContent, DialogTitle, DialogContentText,
    Grid, Link, Paper, Typography, Slide
} from '@material-ui/core'
import { useStyles } from './styles'

export default function JobCard({ cities, tags, title, applyUrl, description }) {
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Paper elevation={3} className={classes.card} align="center">
            <Grid container className={classes.container} spacing={2}>
                <Typography variant="h6" component="p">{title}</Typography>
                <Grid container gap={1} justifyContent="center">
                    {
                        tags.map((tag, index) => (
                            <Button className={classes.button} key={title + tag.name} size="small" variant="contained" color='primary'>
                                {tag.name}
                            </Button>
                        ))
                    }
                </Grid>
                <Grid container gap={1} justifyContent="center">
                    {
                        cities.map((city, index) => (
                            <Button className={classes.button} key={title + city.name} size="small" variant="contained" color='secondary'>
                                {city.name}
                            </Button>
                        ))
                    }
                </Grid>

                <Grid item xs={12}>
                    <Button size="large" onClick={handleOpen} variant="contained" >Job Description</Button>
                </Grid>

                <Grid item xs={12}>
                    <Link href={applyUrl} target="_blank">Click here for more details</Link>
                </Grid>

                <DialogCard title={title} description={description} open={open} handleClose={handleClose} />
            </Grid>
        </Paper>
    )
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function DialogCard({ title, description, open, handleClose }) {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {
                        description
                    }
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

