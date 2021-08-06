import React, { Component } from 'react';

class PokeContainer extends Component {

    state ={
        pokemons: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/pokemons')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default PokeContainer;
