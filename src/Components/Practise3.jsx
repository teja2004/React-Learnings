import React, { Component } from 'react';

class Practise3 extends Component {
  toggleTextColor = () => {
    console.log('Text Toggle');
    if (this.state.color === "red"){
        this.setState({color : "green"})
    }
    else {
        this.setState({color : "red"})
    }
}


    // 4. componentDidMount() - Component LifeCycle
    componentDidMount(){
        setTimeout(() => {
            this.setState({clgName : "Institue of Aeronautical Engineering" });
            console.log("Name Changed")
        },3000)
    }


    // 2 . getDerivedStateFromProps() - Component LifeCycle
    // static getDerivedStateFromProps(props, state) {
    // return { color: props.colorNew };
    // }

    // 1 . Constructor - Component LifeCycle            
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            clgName : "IARE" 
        };
    }

    // 3 . render() - Component LifeCycle   
    render() {
    return (
        <>
        <div className="container container-fluid-sm my-4">
            <h1>This is a {this.state.color} Car</h1>
            <button className="btn btn-primary btn-sm mb-2" type="button" onClick={this.toggleTextColor}>Toggle Text</button>
            <h2>{this.props.myName}</h2>
            <h3>{this.state.clgName}</h3>
        </div>
        </>
    );      
    }
}

export default Practise3;