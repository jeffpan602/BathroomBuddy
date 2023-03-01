import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


import './SettingsMenu.css'
import Header from '../Header/Header'


const SettingsMenu = ( {toggleSettingsMenu} ) =>{


    return(
        <div className="modal">
            <div className="modal-content">

                <div className='header'>
                    <p style={{marginLeft:'50px'}}></p>
                    <h1>Settings</h1>
                    <IconButton onClick={toggleSettingsMenu} style={{color:'white', marginRight:'50px'}}>
                        <CloseIcon />
                    </IconButton>
                    
                </div>
                <div>
                    <h1>Hello</h1>
                </div>
                <div>
                    <p>
                        Hello 2
                    </p>
                    <p>
                        Hello 3
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SettingsMenu;