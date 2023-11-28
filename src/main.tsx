import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {EventsPage} from "./EventPage.tsx";
import {CreateEventForm} from "./CreateEventForm.tsx";
import {IsDev} from "./IsDev.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <EventsPage/>,
    },
    {
        path: "/create_event",
        element: <CreateEventForm/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <IsDev><RouterProvider router={router}/></IsDev>
)
