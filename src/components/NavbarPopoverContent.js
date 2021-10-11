import React from 'react';

class NavbarPopoverContent extends React.Component {
    render() {
        return <div className="navbar__popover-content">
            {this.props.children}
        </div>
    }
}
export default NavbarPopoverContent;