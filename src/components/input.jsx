import React from 'react'

import './css/input.css'

export default function Input(props) {

    async function handleSubmit(){
        event.preventDefault()

        console.log(props.username)
        const res = await fetch('https://usernames.tyway.net/add-username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : `${props.username}`,
            })
        })

        console.log(await res.text())

        props.setSubmitted(true);
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
        </div>
    )
}