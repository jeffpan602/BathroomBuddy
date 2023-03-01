import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


import './SettingsMenu.css'
import Header from '../Header/Header'


const SettingsMenu = ( {toggleSettingsMenu, users} ) =>{

    return(
        <div className="modal">
            <div className='modal-header'>
                <p style={{marginLeft:'50px'}}></p>
                <h1>Settings</h1>
                <IconButton onClick={toggleSettingsMenu} style={{color:'white', marginRight:'50px'}}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="modal-content">
                <div className="content">

                    <h1>Users:</h1>
                    <div>
                        <ul>
                            { users?.map( (user) => <li key={user.id}> {user.username} </li> ) } 
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SettingsMenu;