import {useEffect} from 'react';
import './App.css';
import firebase from "firebase/messaging";

function App() {

    useEffect(() => {
        // firebase.getMessaging()
        // const msg=firebase.getMessaging();
        // msg.requestPermission().then(()=>{
        //   return msg.getToken();
        // }).then((data)=>{
        //   console.warn("token",data)
        // })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default App;
