import React from 'react';

const stylesFoot = {
    backgroundColor: 'rgb(25, 118, 210)',
    border: '1px solid white',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '50px', 
    color: 'aqua', 
};

function AppFooter() {
    return (
        <h1 style={stylesFoot}>
            CINEMA 2024
        </h1>
    );
}

export default AppFooter;
