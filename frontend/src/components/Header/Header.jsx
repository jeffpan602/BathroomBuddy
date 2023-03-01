import { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

import useClasses from './styles';

const Header = ( { toggleSideMenu, toggleSettingsMenu } ) => {
    const classes = useClasses();

    return (
        <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <IconButton onClick={toggleSideMenu} style={{color:'white'}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        &nbsp; Bathroom Buddy
                    </Typography>
                </div>
                <IconButton onClick={toggleSettingsMenu} style={{color:'white'}}>
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;