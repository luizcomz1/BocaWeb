import { Component } from "react";

export default class Buscar extends Component {
    constructor(props) {
        super(props);
        this.modificacao = this.modificacao.bind(this);
    }
    modificacao(e) {
      this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="busca">
                <input
                    name="busca"
                    type="text"
                    value={this.props.value}
                    placeholder="O que deseja Buscar"
                    onChange={this.modificacao}
                />
            </div>
        );
    }
}
