import React from 'react';
import {Link} from 'react-router-dom';

function Homepage(){
    return (
        <div className="App">
            <div className="App-body">
                <div className="button-holder">
                    <button><Link to="/registration">Register</Link></button>
                </div>
                <div className="button-holder">
                    <button><Link to="/login">Login</Link></button>
                </div>
            </div>
        </div>
    );
}
export default Homepage;