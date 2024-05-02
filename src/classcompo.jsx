import React from "react";
// connecting class components with functional components and example of class component
import { Classconnectfunction } from "./functions";
export class Classcompo extends React.Component
{
    // constructor()
    // {
    //     alert("hello world from class constructor")
    // }
    hello()
    {
        return (
            <div>hello world from a function in class</div>
        );
    }
    render()
    {
        return(
            <div>
                <hello/>
            <div> functional component connecting to class component</div>
           <Classconnectfunction/>
           </div>
        );
    }
}