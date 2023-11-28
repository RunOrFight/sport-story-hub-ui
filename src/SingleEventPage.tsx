import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {httpApi} from "./httpApi.ts";
import {IEventFull} from "./types.ts";

const SingleEventPage = () => {
    const params = useParams()
    const [event, setEvent] = useState<IEventFull>()

    useEffect(() => {
        httpApi.getEventById(params.id!).then((event) => {
            setEvent(event)
        })

    }, [params])


    return <div>
        <Link to={".."}>{"Back"}</Link>
        <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
}

export {SingleEventPage}
