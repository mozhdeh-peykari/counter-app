import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component{
    state= {
        counters: [
            {id: 1, value : 4},
            {id: 2, value : 0},
            {id: 3, value : 0},
            {id: 4, value : 0}]
    };

    handleDelete = counterId => {
        console.log("delete clicked", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    render() {
        return (<div>
            {this.state.counters.map(c => 
            <Counter key={c.id} 
                     //value={c.value}
                     onDelete={this.handleDelete}
                     //id={c.id}
                     counter = {c}
                     >
                <h4>counter #{c.id}</h4>
            </Counter>
            )}

        </div>);
    }
}

export default Counters;