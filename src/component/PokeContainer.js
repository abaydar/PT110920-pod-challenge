import React, { Component } from 'react';

class PokeContainer extends Component {

    state ={
        pokemons: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/pokemons')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                pokemons: data
            })
        })
    }

    render() {

        const pokemons = this.state.pokemons.map((p) => {
            return <h1>{p.name}</h1>
        })

        return (
            <div>
                {pokemons}
            </div>
        );
    }
}

export default PokeContainer;
