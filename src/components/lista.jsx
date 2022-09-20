import { Component } from "react";

export default class Lista extends Component {
    render() {
        const odas = this.props.data
        return (
            <div className="lista">
                <p>{odas.length} odas</p>
                {odas.map((oda) => (
                    <div key={oda._id} className="card">
                        <h1>Nome: {oda.nome}</h1>
                        <p className="palavra_chave"><b>palavras chave: </b><code>{oda.palavras_chave}</code></p>
                        <p><b>usuario:</b> {oda.usuario}</p>
                        <div className="text">
                        <p><b>descrição: </b>{oda.descricao}</p>
                        <h6>{oda.data_inclusao}</h6>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
