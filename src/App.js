import React, {Component} from 'react';
import api from './api';
import apiDatabase from './apiDatabase';


class App extends Component{

    state={
        teste: [],
        portal: []
    }

    async componentDidMount(){

        //essa parte pega a api de fora da bolsa de valores
        const response = await api.get('');

        this.setState({ teste: response.data});





        //essa parte pega a api gerada no visual studio que traz a consulta SQL Server

        const response2 = await apiDatabase.get('');

        
        this.setState({ portal: response2.data});

    }

    render(){

        

        return(
            <div>
                <h1>Ações MGLU3</h1>

            {this.state.teste.map(teste => (
                <li>
                    <b>Data: {teste.DATPRG.toString().substring(8,10)}/{teste.DATPRG.toString().substring(5,7)}/{teste.DATPRG.toString().substring(0,4)}</b>
                    <br/>
                    <br/>
                     Abertura: {teste.PREABE}
                     <br/>
                     Fechamento: {teste.PREULT}
                    <br/>
                    <br/>
                    <br/>
                </li>
                
            ))}

            <br/>
            <br/>
            <br/>    

            <h1>EXEMPLO PORTAL</h1>

            {this.state.portal.map(portal => (
                <li>
                    <b>Codigo: {portal.porCodigo}</b>
                    <br/>
                    <br/>
                     Portal: {portal.porNome}
                    <br/>
                    <br/>
                    <br/>
                </li>
                
            ))}   
            </div>
            
        );
    }
}



export default App;