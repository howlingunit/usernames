import React from 'react'

import './css/output.css';

export default function Output(props) {

    const [amtOf, setAmtOf] = React.useState();



    function handleClick() {
        props.setSubmitted(false)
        props.setUsername('');
    }

    React.useEffect(() => {
        (async () =>{
            const res = await fetch(`https://usernames.tyway.net/amt-of-names?username=${props.username}`);
            let amt = await res.json();
            amt = amt[0];
            setAmtOf(amt.count - 1); // take one to account for the inputted username
    })();}, [amtOf])
    
    return (
        <div className='output'>
            <h1>Woah, {props.username} has been used {amtOf} {amtOf <= 1 ? 'time' : 'times'}</h1>

            <button onClick={handleClick}>Try another Name?</button>
        </div>
    )
}