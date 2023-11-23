import './App.css'
import {useEffect} from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {CreateEventForm} from "./CreateEventForm.tsx";

const tg = Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    return <CreateEventForm/>

    return <div className="flex flex-col h-screen p-2 gap-2">

        <div className="overflow-hidden h-full">
            <pre>{JSON.stringify(tg.initDataUnsafe.user, null, 2)}</pre>
        </div>

        <div>
            <ButtonGroup fullWidth>
                <Button color="primary">One</Button>
                <Button color="primary">Two</Button>
                <Button color="primary">Three</Button>
            </ButtonGroup>
        </div>
        <Button color="primary" variant="ghost" onClick={tg.close}>{"Close"}</Button>

    </div>
}

export default App
