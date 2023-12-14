import React from "react";

class HelloWorld extends React.Component{
    render(){
        return (
            <h2>Hello {this.props.name}</h2>
        );
    }
}
export default HelloWorld;