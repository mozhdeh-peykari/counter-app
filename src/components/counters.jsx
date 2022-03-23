import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component{
    
    render() {
        return (<div>
                <button onClick={this.props.onReset} className="btn btn-secondary btn-sm">Reset</button>

            {this.props.counters.map(c => 
            <Counter key={c.id} 
                     onDelete={this.props.onDelete}
                     onIncrement={this.props.onIncrement}
                     counter = {c}
                     >
                <h4>counter #{c.id}</h4>
            </Counter>
            )}

        </div>);
    }
}

export default Counters;