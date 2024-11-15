import React from 'react'

import "./Button.css";

export const Button = ({ disabled, text, type, id }) => {
    return (
        <>
            <button disabled={disabled} type={type} id={id}>
                {text}
            </button>
        </>
    )
}
