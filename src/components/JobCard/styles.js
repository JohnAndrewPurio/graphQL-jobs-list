import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    card: {
        width: 450,
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    },

    container: {
        width: '100%',
        padding: theme.spacing(2)
    },

    button: {
        margin: theme.spacing(1)
    },

    root: {
        width: '100%'
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

    paper: {
        position: 'absolute',
        width: 750,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))