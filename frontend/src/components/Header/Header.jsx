import { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useClasses from './styles';

const Header = ( { toggleSideMenu } ) => {
    const classes = useClasses();

    return (
        <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={toggleSideMenu} style={{color:'white'}}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    &nbsp; Bathroom Buddy
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;