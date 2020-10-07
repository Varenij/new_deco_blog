import React from 'react';                
                
const SingUp = () => {
    return (          
        <div className="signupContainer">
            <h1>SINGUP TO <br/>NEWSLAETTER</h1>
            <form action="">
            <input type="text" placeholder="YOUR NAME"/>
            <input className='email' type="email" placeholder="YOUR EMAIL ADDRESS"/>
            </form>
            <div className="subscribe">
            SUBSCRIBE NOW
            </div>
        </div>
    )
}

export default SingUp