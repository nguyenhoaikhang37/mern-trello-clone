import {useEffect, useState} from 'react'

import './App.css'

function App() {
    const [state, setState] = useState('');

    useEffect(() => {
        console.log(state)
    }, []);
    
    return (
        <div className="App">
            Hello world
        </div>
    )
}

export default App
