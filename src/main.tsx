import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {EventsPage} from "./EventPage.tsx";
import {CreateEventForm} from "./CreateEventForm.tsx";
import {Modal} from "antd";


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
    <Modal width={'26.25rem'} footer={null} open={true}><RouterProvider router={router}/></Modal>
)
