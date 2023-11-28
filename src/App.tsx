import './App.css'
import {useEffect} from "react";
import {CreateEventForm} from "./CreateEventForm.tsx";

const tg = Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    return <CreateEventForm/>

}

export default App
