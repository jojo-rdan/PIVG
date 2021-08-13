import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <div>
            <h1>Welcome to LvlUp!</h1>
            <Link to='/home'>
                <button>Come in now traveler</button>
            </Link>
        </div>
    )
}