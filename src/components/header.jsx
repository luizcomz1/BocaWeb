import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header>
                {this.props.children}
                <div className="logo">
                    <img src="http://www.bocaweb.com.br/images/logobranco.png" alt="Logo BocaWeb" />
                    <p>BocaWeb</p>
                </div>
            </header>
        );
    }
}
