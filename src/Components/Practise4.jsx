import React, { Component } from 'react';

class Practise4 extends Component {
    // 1
    constructor(props){
        super(props);
        this.state = {
            say : "Initial Saying"
        }
    }

    changeSay = () => {
        this.setState({ say: this.props.letSay});
    }

    // 2
    shouldComponentUpdate(){
        return false; // Any Component state will not update as it return false
    }

    // 3
    render() {
        return (
            <div className="container my-4">
                <h5>{this.state.say}</h5>
                <button className="btn btn-primary btn-sm mb-2" type="button" onClick={this.changeSay}>Toggle Text</button>
            </div>
        );
    }
}

export default Practise4;