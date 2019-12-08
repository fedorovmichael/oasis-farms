import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        bottom: '0',
        width: '100%',       
    },    
}))

export default function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            
        </div>
    );
}