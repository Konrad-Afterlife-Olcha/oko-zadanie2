import React from 'react';


class NavbarIcon extends React.Component {
    render() {
        return <div className="navbar__icon">
            <button onClick={this.props.handleClick}>
                {this.props.children}
            </button>
        </div>
    }
}
export default NavbarIcon;