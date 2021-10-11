import React from "react";

class NavbarLink extends React.Component {
    render() {
        return <div className="navbar__link">
            <a href={this.props.link}>
                {this.props.text}
                </a>
        </div>
    }
}
export default NavbarLink;