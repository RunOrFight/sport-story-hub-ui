import {EEventStatus, IEventFull, IEventLocation} from "./types.ts";

const eventsLocations: IEventLocation[] = [
    {
        id: 234,
        title: "Box365",
        url: "https://maps.app.goo.gl/ZeLrHS4BzczpcHAD7",
        address: "ул. Октябрьская 16/3, Минск",
        preview: {
            id: 1,
            url: "eafaef"
        }
    },
]

const events: IEventFull[] = [
    {
        id: 555,
        location: eventsLocations[0],
        status: EEventStatus.STARTED,
        dateTime: new Date(),
        description: "We hold games in formats from 4x4 to 9x9 with varying durations from 60 to 120 minutes.",
        participants: [{
            id: 22, user: {username: "privetenn", photo: {url: "ageeag", id: 444}}
        }],
        participantsLimit: 10,
        price: "5 BYN"
    }
]


const httpApi = {
    getEvents: async () => {
        return Promise.resolve(events)
    },
    getEventById: async (id: number) => {
        return Promise.resolve(events.find((it) => it.id === id))
    },
    getEventsLocations: async () => {
        return eventsLocations
    },

}

export {httpApi}
