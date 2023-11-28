interface IEventRaw {
    place: string,
    date: string,
    participantsCount: number,
    price: string
}

interface IEventFull extends IEventRaw {
    participants: string[]
    id: string
}

export type {IEventRaw, IEventFull}
