/* This piece of code  is for C react refactor exercice*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function BigForm() {
    const checkboxes = [0, 1, 2];

    return (
        <Form>
            {checkboxes.map(id => <Checkbox key={id} id={id} />)}
        </Form>
    );
}

function Form(props) {
    const [checked, setChecked] = useState([false, false, false]);
    const handleCheckboxChange = e => {
        let checkboxId = Number(e.target.id);
        let newCheckedValues = checked.map((checkboxState, index) => {
            return index === checkboxId ? !checkboxState : checkboxState
        });
        setChecked(newCheckedValues);
    }

    const getCheckedBoxes = () => {
        let checkedBoxes = checked.filter(item => item === true);
        return checkedBoxes.length;
    }

    return (
        <div className="form">
            <span>Checked boxes: {getCheckedBoxes()}</span>

            {React.Children.map(props.children, (child, index) => {
                return React.cloneElement(child, {
                    stateValue: checked[index],
                    onCheckboxChange: handleCheckboxChange
                })
            })}
        </div>
    );
}

function Checkbox(props) {
    return (
        <div className="checkbox-wrapper">
            <span>checkbox {props.id}</span>
            <input value={props.stateValue} id={props.id} onChange={props.onCheckboxChange} type="checkbox" />
        </div>
    );
}

ReactDOM.render(
    <BigForm />,
    document.getElementById('container')
);