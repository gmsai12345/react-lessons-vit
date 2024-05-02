import React from "react";
import { Classcompo } from "./classcompo";
export function Regular()
{
    return(
        <div>hello world from regular</div>
    )
}
export var Arrow = () =>
{
    return(
        <div>hello world from arrow</div>
    );
} 
// functional component connecting to class component
export function Functionconnectclass()
{
    return (
        <Classcompo/>
    );
}
// class component connecting to functional component
export function Classconnectfunction()
{
    return(
        <div>hello world from class component connecting to functional component</div>
    );
}