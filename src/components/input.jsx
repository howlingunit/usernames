import React from 'react'

import './css/input.css'

export default function Input(props) {

    const [error, setError] = React.useState();

    async function handleSubmit(){
        event.preventDefault()

        console.log(props.username)
        let res = await fetch('http://dev.tyway.net:8080/add-username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : `${props.username}`,
            })
        })

        res = await res.json();


        console.log(res)
        if(!res.valid){
            setError(res.error)
        }


        if(res.valid){
            props.setSubmitted(true);
        }
        
    }

    function handleChange(e){
        props.setUsername(e.target.value);
    }

    return (
        <div>
            <h1>Submit a Username:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={props.username} />
                <button>Submit</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}