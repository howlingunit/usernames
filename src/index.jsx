import React from 'react'
import ReactDOM from 'react-dom/client'

import Input from './components/input.jsx'
import Output from './components/output.jsx'



function App() {
  const [submitted, setSubmitted] = React.useState(false);
  const [username, setUsername] = React.useState('')

  return (
    <>
      <main>
        {!submitted && <Input setSubmitted={setSubmitted} username={username} setUsername={setUsername}/>}

        {submitted && <Output setSubmitted={setSubmitted} username={username} setUsername={setUsername} />}

      </main>

      <footer>
        <p>This app was made by <a href='https://tyway.net'>Tyway.</a> Check the <a href='https://github.com/howlingunit/usernames' >Github</a> for more info.</p>
      </footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
