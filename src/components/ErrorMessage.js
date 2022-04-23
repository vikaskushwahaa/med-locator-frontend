import React from 'react';

import {Alert} from "react-bootstrap";

const ErrorMessage = ( {variant = "info", children}) => {
    return(
        <Alert variant ={variant} style={{fontSize:16},{marginTop:15}}>
            <strong style={{marginLeft:20}}>{children}</strong>
        </Alert>
    );
}

export default ErrorMessage;
