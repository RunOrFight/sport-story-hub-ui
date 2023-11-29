interface IEventLocation {
    title: string;
    url: string;
    address: string;
    previewId: string
}

type TEventStatus = "WAITING" | "STARTED" | "FINISHED"

interface IEventParticipant {
    username: string;
    photoId: string
}

interface IEventRaw {
    location: IEventLocation,
    status: TEventStatus
    dateTime: Date,
    description: string,
    price: string,
    participantsLimit: number
}

interface IEventFull extends IEventRaw {
    participants: IEventParticipant[]
    id: string
}

export type {IEventRaw, IEventFull}
