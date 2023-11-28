import {Card, Descriptions, Flex} from "antd";
import {useEffect, useState} from "react";
import {IEventFull} from "./types.ts";

const EventsPage = () => {
    const [events, setEvents] = useState<Record<string, IEventFull>>({})

    useEffect(() => {
        const fetchEvents = async () => {
            const events = {
                "123": {
                    id: "123",
                    price: "5 BYN",
                    participantsCount: 8,
                    date: "12, December",
                    participants: [],
                    place: "BOX 365"
                },
                "234": {
                    id: "234",
                    price: "10 BYN",
                    participantsCount: 12,
                    date: "18, December",
                    participants: [],
                    place: "BOX 365"
                }
            }
            setEvents(events)
        }

        fetchEvents()
    }, [])

    return <Flex vertical gap={"small"}>
        {Object.values(events).map((event) => <Card key={event.id} hoverable title={event.place}
                                                    style={{width: "100%"}}>
            <Descriptions layout={"vertical"}>
                <Descriptions.Item label="Date">{event.date}</Descriptions.Item>
                <Descriptions.Item label="Price">{event.price}</Descriptions.Item>
                <Descriptions.Item
                    label="Participants">{`${event.participants.length}/${event.participantsCount}`}</Descriptions.Item>
            </Descriptions>
        </Card>)}
    </Flex>;
}

export {EventsPage}
