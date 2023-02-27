import { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

import useClasses from './styles';

const Header = () => {
    const classes = useClasses();

    return (
        <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Bathroom Buddy
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;