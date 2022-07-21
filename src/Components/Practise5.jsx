import React, { Component } from 'react';

class Practise5 extends Component {
    // 1
    constructor(){
        super();
        this.state = {
            name : "Teja"
        }
    }

    // 3 Update Using componentDidMount()
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name: "Nagateja"})
        },2000)
    }

    // 4 getSnapshotBeforeUpdate() 
    getSnapshotBeforeUpdate(prevProps , prevState){
        return document.querySelector("#head1").innerHTML = `Before the State Updated the name was : ${prevState.name}`;
    }

    // 5 componentDidUpdate()
    componentDidUpdate() {
        document.querySelector("#head2").innerHTML = `After the State Updated the name was : ${this.state.name}`;
    }

    // 2
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>{this.state.name}</h2>
                    <div id="head1"></div>
                    <div id="head2"></div>
                </div>
            </>
        );
    }
}

export default Practise5;