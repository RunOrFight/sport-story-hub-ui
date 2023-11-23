import {Button, Input} from "@nextui-org/react";
import {useForm} from "react-hook-form";
import uuid from "react-uuid";

const CreateEventForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            place: "BOX 365",
            date: Date.now().toString(),
            price: "5 BYN",
            participantsCount: 10,
            id: uuid()
        }
    })
    const onSubmit = (data: object) => Telegram.WebApp.sendData(JSON.stringify(data))

    return <form onSubmit={handleSubmit(onSubmit)} className={"h-full flex flex-col gap-2 p-4"}>
        <div className={"flex flex-col gap-2 flex-1"}>
            <Input {...register("place")} type={"text"} placeholder={"Box 365"} label={"Place"}
                   labelPlacement={"outside"}/>
            <Input {...register("date")} type={"datetime-local"} placeholder={Date.now().toString()} label={"Date"}
                   labelPlacement={"outside"}/>
            <Input {...register("price")} type={"text"} placeholder={"5 BYN"} label={"Price"}
                   labelPlacement={"outside"}/>
            <Input {...register("participantsCount")} type={"number"} placeholder={"10"} label={"Participants Count"}
                   labelPlacement={"outside"}/>
        </div>

        <Button type={"submit"} fullWidth color={"primary"}>{"Create"}</Button>
    </form>
}

export {CreateEventForm}
