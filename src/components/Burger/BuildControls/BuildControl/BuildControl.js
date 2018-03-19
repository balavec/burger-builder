import React from 'react';


const buildControl = (props) => (
    <div className='BuildControl'>
        <div>{props.label}</div>
        <button disabled={props.disabled} onClick={props.removed}>Less</button>
        <button onClick={props.added}>More</button>
    </div>
);

export default buildControl;
