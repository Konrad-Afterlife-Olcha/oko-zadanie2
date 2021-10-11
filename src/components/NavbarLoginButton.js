import React from "react";

class NavbarLoginButton extends React.Component {
    render() {
        return <div>
            <button className="navbar__login-button" onClick={() => {this.props.onLogin()}}>
                {this.props.text}
            </button>
        </div>
    }
}
export default NavbarLoginButton;