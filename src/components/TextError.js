import React from 'react';

const TextError = (props) => {
    return (
        <div className="error mt-0">
            {props.children}
        </div>
    );
}

export default TextError;