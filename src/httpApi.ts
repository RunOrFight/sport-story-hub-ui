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

const DELAY = 1_000

const withDelay = <T>(value: T): Promise<T> => {
    return new Promise((res) => {
        setTimeout(() => res(value), DELAY)
    })
}

const httpApi = {
    getEvents: async () => {
        return withDelay(events)
    },
    getEventById: async (id: number) => {
        return withDelay(events.find((it) => it.id === id))
    },
    getEventsLocations: async () => {
        return withDelay(eventsLocations)
    },

}

export {httpApi}
