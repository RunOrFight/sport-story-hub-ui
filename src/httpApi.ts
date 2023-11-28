import {IEventFull} from "./types.ts";

const events: IEventFull[] = [
    {
        id: "123",
        location: {
            title: "Box365",
            url: "https://maps.app.goo.gl/ZeLrHS4BzczpcHAD7",
            address: "ул. Октябрьская 16/3, Минск",
            previewId: '1faefaeefae'
        },
        status: 'STARTED',
        dateTime: "20:15, 29 ноября, ср",
        description: "We hold games in formats from 4x4 to 9x9 with varying durations from 60 to 120 minutes.",
        participants: [{username: "privetenn", photoId: "gq12gaeg21qe123"}],
        participantsLimit: 10,
        price: "5 BYN"
    }
]


const httpApi = {
    getEvents: async () => {
        return Promise.resolve(events)
    },
    getEventById: async (id: string) => {
        return Promise.resolve(events.find((it) => it.id === id))
    }
}

export {httpApi}
