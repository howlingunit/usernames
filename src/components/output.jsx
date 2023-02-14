import React from 'react'

import './css/output.css';

export default function Output(props) {

    const [amtOf, setAmtOf] = React.useState();
    const [msg, setMsg] = React.useState();



    function handleClick() {
        props.setSubmitted(false)
        props.setUsername('');
    }

    React.useEffect(() => {
        (async () =>{
            let res = await fetch(`https://usernames.tyway.net/amt-of-names?username=${props.username}`);
            res = await res.json();
            setAmtOf(res.amt);
            if(res.msg) {setMsg(res.msg)}
    })();}, [amtOf])
    
    return (
        <div className='output'>
            <h1>Woah, {props.username} has been used {amtOf} {amtOf <= 1 ? 'time' : 'times'}</h1>

            {msg && <p>{msg}</p>}

            <button onClick={handleClick}>Try another Name?</button>
        </div>
    )
}