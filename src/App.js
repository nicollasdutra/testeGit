import React, {Component} from 'react';
import api from './api';


class App extends Component{

    state={
        teste: [],
    }

    async componentDidMount(){

        const response = await api.get('');

        console.log(response.data);

        this.setState({ teste: response.data});
    }

    render(){

        const {teste} = this.state;
        


        return(
            <div>
                <h1>Ações MGLU3</h1>

            {teste.map(teste => (
                <li>
                    <b>Data: {teste.DATPRG}</b>
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


            </div>
        );
    }
}



export default App;