import React, {Component} from 'react';
import api from './api';
import apiDatabase from './apiDatabase';


class App extends Component{

    state={
        teste: [],
        portal: []
    }

    async componentDidMount(){

        const response = await api.get('');

        const opcao = {
            
                method: 'GET',
                mode: 'no-cors',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                },
                //withCredentials: true,
                //credentials: 'same-origin',
              
         }

        const response2 = await apiDatabase.get('');

        //console.log(response.data);

        this.setState({ teste: response.data});

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