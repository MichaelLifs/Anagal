import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        maxWidth: '80%',
        justifyContent: 'center',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',

    },
}));