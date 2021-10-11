import React from "react";
import TextField from '@mui/material/TextField';
import {RiCloseFill as CloseIcon} from 'react-icons/ri'

const NavbarSearchBox = (props) => {
    return (
        <div className={props.open ? 'navbar__searchbox' : 'navbar__searchbox navbar__searchbox--closed'}>
            <TextField id="outlined-basic" variant="outlined" size="small"/>
            <div className='navbar__searchbox-close'>
                <CloseIcon onClick={props.closeSearchBox}/>
            </div>
            
        </div>
    );
}
export default NavbarSearchBox;