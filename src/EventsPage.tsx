import {Card, Descriptions, Flex} from "antd";
import {useEffect, useState} from "react";
import {IEventFull} from "./types.ts";
import {httpApi} from "./httpApi.ts";
import dayjs from "dayjs";
import {generatePath, Link} from "react-router-dom";
import {routeMap} from "./routeMap.ts";

const EventsPage = () => {
    const [events, setEvents] = useState<IEventFull[]>([])

    useEffect(() => {
        httpApi.getEvents().then((events) => {
            setEvents(events)
        })
    }, [])

    return <Flex vertical gap={"small"}>
        {events.map((event) => <Link key={event.id} to={generatePath(routeMap.singleEventRoute, {id: event.id})}>
            <Card hoverable title={event.location.title}
                  style={{width: "100%"}}>
                <Descriptions layout={"vertical"}>
                    <Descriptions.Item label="Date">{dayjs(event.dateTime).format("yyyy")}</Descriptions.Item>
                    <Descriptions.Item label="Price">{event.price}</Descriptions.Item>
                    <Descriptions.Item
                        label="Participants">{`${event.participants.length}/${event.participantsLimit}`}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Link>)}
    </Flex>;
}

export {EventsPage}
