import React, { Component } from "react";
import PropTypes from "prop-types";

export class ClassProps extends Component {
    render() {
        const { rollno, name, num, passorfail } = this.props;
        
        return (
            <div>
                <p>Roll No: {rollno}</p>
                <p>Name: {name}</p>
                <p>Phone: {num}</p>
                <p>Result: {passorfail ? "Passed" : "Failed"}</p>
            </div>
        );
    }
}

ClassProps.propTypes = {
    rollno: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired,
    passorfail: PropTypes.bool.isRequired
};

export default ClassProps;
