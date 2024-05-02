import React from "react";
import PropTypes from "prop-types";

export function Functionprops(props) {
    return (
        <div>
            <p>Roll No: {props.rollno}</p>
            <p>Name: {props.name}</p>
            <p>Phone: {props.num}</p>
            <p>Result: {props.passorfail ? "Passed" : "Failed"}</p>
        </div>
    );
}

Functionprops.propTypes = {
    rollno: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired,
    passorfail: PropTypes.bool.isRequired
};
