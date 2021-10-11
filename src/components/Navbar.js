import './Navbar.css';
import React from 'react';
import mainIcon from '../assets/main-icon.png';
import NavbarLink from './NavbarLink';
import NavbarIcon from './NavbarIcon';
import { MdSearch as SearchIcon } from 'react-icons/md';
import { MdNotificationsNone as NotificationsIcon } from 'react-icons/md';
import { MdAccountCircle as UserIcon } from 'react-icons/md';
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi';
import NavbarLoginButton from './NavbarLoginButton';
import NavbarPopover from './NavbarUserPopover';
import NavbarPopoverContent from './NavbarPopoverContent';
import NavbarSearchBox from './NavbarSearchBox';

class Navbar extends React.Component {
    state = {
        login: false,
        searchBoxOpen: false,
        mobile: null,
        mobileMenuVisible: false
    }
    componentDidMount() {
        this.setState({mobile: window.innerWidth < 768})
        window.addEventListener('resize', this.checkWindowWidth)
    }
    checkWindowWidth = () => {
        this.setState({mobile: window.innerWidth < 768})
    }
    onLogin = () => {
        this.setState({login: !this.state.login})
    }
    openSearchBox = () => {
        this.setState({searchBoxOpen: true})
    }
    closeSearchBox = () => {
        this.setState({searchBoxOpen: false})
    }
    toggleMenu = () => {
        this.setState({mobileMenuVisible: !this.state.mobileMenuVisible})
    }
    render() {
        return <div className="navbar">
            <div className="navbar__wrap">
                {this.state.mobile ? <NavbarIcon >
                        <HamburgerIcon onClick={this.toggleMenu}/>
                    </NavbarIcon> : null}
                <div className={this.state.mobile ? (this.state.mobileMenuVisible ? 'navbar__main-nav--mobile visible' : 'navbar__main-nav--mobile') : 'navbar__main-nav'}>
                    <div className="navbar__main-icon">
                        <img src={mainIcon} alt="oko-press logo" />
                    </div>
                    {/* We should use React Router, but i sticked to simple links for a task simplicity */}
                    <NavbarLink text="Wydarzenia" link="#"/>
                    <NavbarLink text="Kontakt" link="#"/>
                    <NavbarLink text="Wesprzyj Nas" link="#"/>
                </div>
                <div className="navbar__aside-nav">

                    <NavbarIcon >
                        <SearchIcon onClick={this.openSearchBox}/>
                    </NavbarIcon>
                    <NavbarSearchBox open={this.state.searchBoxOpen} closeSearchBox={this.closeSearchBox}/>

                    {this.state.login ? <NavbarIcon link="#">
                        <NavbarPopover
                            icon={<NotificationsIcon/>}
                            content={<NavbarPopoverContent>Notyfikacje</NavbarPopoverContent>}
                        />
                    </NavbarIcon> : null}

                    {this.state.login ? <NavbarIcon>
                        <NavbarPopover
                            icon={<UserIcon/>}
                            content={<NavbarPopoverContent>
                                    <NavbarLoginButton text='Wyloguj się' onLogin={this.onLogin}/>
                                </NavbarPopoverContent>}
                        />
                    </NavbarIcon> : null}
                    
                    {this.state.login ? null : <NavbarLoginButton text='Zaloguj się' onLogin={this.onLogin}/>}
                    
                </div>
            </div>
            
        </div>
    }
}
export default Navbar;