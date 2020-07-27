import React from 'react';

function ButtonLink(props) {
    // props => depende do que está sendo passado
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;