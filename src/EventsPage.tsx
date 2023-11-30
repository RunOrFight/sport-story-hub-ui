import {Card, Descriptions, Flex, Skeleton} from "antd";
import {useEffect, useState} from "react";
import {IEventFull} from "./types.ts";
import {httpApi} from "./httpApi.ts";
import {generatePath, Link} from "react-router-dom";
import {routeMap} from "./routeMap.ts";


const EventsPage = () => {
    const [events, setEvents] = useState<IEventFull[]>([])

    useEffect(() => {
        httpApi.getEvents().then((events) => {
            setEvents(events)
        })
    }, [])

    if (events.length === 0) {
        return <Skeleton active/>
    }

    return <Flex vertical gap={"small"}>
        {events.map((event) => <Link key={event.id} to={generatePath(routeMap.singleEventRoute, {id: event.id})}>
            <Card hoverable title={`${event.location.title}, ${event.location.address}`}
                  size={"small"}
                  style={{width: "100%"}} cover={<img height={200} alt={"cover"} src={event.location.preview.url}/>}>
                <Descriptions layout={"vertical"}>
                    <Descriptions.Item label="Date">{event.dateTime}</Descriptions.Item>
                    <Descriptions.Item label="Price">{event.price}</Descriptions.Item>
                    <Descriptions.Item
                        label="Participants">{`${event.participants.length}/${event.participantsLimit}`}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Link>)}
    </Flex>;
}

export {EventsPage}
