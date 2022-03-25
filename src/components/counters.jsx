import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component{
    
    render() {
        console.log("Counters - Rendered");

        const {onReset, counters, onDelete, onIncrement, onDecrement }= this.props;
        return (<div>
                <button onClick={onReset} className="btn btn-secondary btn-sm">Reset</button>

            {counters.map(c => 
            <Counter key={c.id} 
                     onDelete={onDelete}
                     onIncrement={onIncrement}
                     onDecrement={onDecrement}
                     counter = {c}
                     >
                <h4>counter #{c.id}</h4>
            </Counter>
            )}

        </div>);
    }
}

export default Counters;