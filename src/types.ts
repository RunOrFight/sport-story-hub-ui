interface IFile {
    id: number,
    url: string
}

interface IEventLocation {
    id: number;
    title: string;
    url: string;
    address: string;
    preview: IFile
}

enum EEventStatus {
    WAITING = "waiting",
    STARTED = "started",
    FINISHED = "finished"
}

interface IUser {
    username: string;
    photo: IFile
}

interface IEventParticipant {
    id: number,
    user: IUser
}

interface IEventRaw {
    location: IEventLocation,
    dateTime: Date,
    description: string,
    price: string,
    participantsLimit: number
}

interface IEventFull extends IEventRaw {
    participants: IEventParticipant[]
    id: number
    status: EEventStatus
}

interface IEventToPost extends Omit<IEventRaw, "location"> {
    locationId: string
}

export type {IEventRaw, IEventFull, IEventLocation, IEventToPost}
export {EEventStatus}
