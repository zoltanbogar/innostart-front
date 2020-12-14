import * as React from 'react';

const sorter = props => {
    const clickedOptionHandler = () => {
        props.changed(props.column, props.operator);
    };
    return <option value={props.value} onClick={() => clickedOptionHandler()}>{props.children}</option>;
}

export default sorter;