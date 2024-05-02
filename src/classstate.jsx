import React from "react";
export class ClassState extends React.Component
{
    constructor()
    {
        super();
        this.state={name:"sai dhakshan y",subject:"react"};
    }
    render()
    {
        return (
            <div>
                <p>name: {this.state.name}</p>
                <p>subject: {this.state.subject}</p>
                <button onClick={this.changevalue}>click</button>
            </div>
        );
    }
    changevalue = () => {
        this.setState({ name: "mercedes", subject: "machine learning" });
    }
    
}