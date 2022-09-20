import { Component } from "react";
import "./App.css";
import Buscar from "./components/form_busca";
import Header from "./components/header";
import Lista from "./components/lista";
import Footer from "./components/footer";

class App extends Component {
    state = {
        busca: "",
        odas: [],
    };
    componentDidMount() {
        this.carregaODAs();
    }

    carregaODAs() {
        const { busca } = this.state;
        fetch("https://www.bocaweb.com.br/apibocaweb?nome=" + busca)
            .then((res) => res.json())
            .then((odas) => this.setState({ odas }));
    }
    buscaODA=(texto)=>{
        this.setState({ busca:texto },()=>this.carregaODAs());
    }

    render() {
        const { busca, odas } = this.state;
        return (
            <section className="container">
                <Header>
                <Buscar value={busca} onChange={this.buscaODA} />
                </Header>
                <Lista data={odas}/>
                <Footer></Footer>
            </section>
        );
    }
}

export default App;
