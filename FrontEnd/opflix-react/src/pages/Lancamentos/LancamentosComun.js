import React,{Component} from 'react';
import Rodape from '../../components/Rodape/Rodape';
import Axios from "axios";
import logosimples from '../../assets/img/LogoSimples.png';
import LancamentosComunStyle from "./LancamentosComun.css";


class LancamentosComun extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://192.168.4.209:5000/api/lancamentos', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ lista: data.data });
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    render() {
        return (
            	<div>
            <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logosimples} />
                    <h2 className="conteudoPrincipal-tituloLC">Lançamentos</h2>
                    </div>
                </header>
                <div className="lancamentos">
                    {this.state.lista.map(element => {
                        return (
                            <div id="infos">
                                <ul className="titulos">
                                    {/* <li>{element.idLancamento}</li> */}
                                    <li>Título: {element.titulo}</li>
                                    <li>Sinopse: {element.sinopse}</li>
                                    <li>Tempo de Duração: {element.tempoDuracao}</li>
                                    <li>Formato: {element.filmeSerie}</li>
                                    <li>Data de lançamento: {element.dataLancamento}</li>
                                    <li>Categoria: {element.idCategoriaNavigation === undefined ? 'null' : element.idCategoriaNavigation.categoria }</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <Rodape />
            </div>
        );
    }
}

export default LancamentosComun;