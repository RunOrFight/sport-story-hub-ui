import {Button, DatePicker, Form, Input, InputNumber, message, Select} from "antd";
import dayjs from "dayjs"
import {IEventLocation, IEventRaw} from "./types.ts";
import {useState} from "react";
import {httpApi} from "./httpApi.ts";

interface ICreateEventFormValues extends Omit<IEventRaw, "dateTime"> {
    dateTime: ReturnType<typeof dayjs>
}

const initialValues = {
    participantsLimit: 10,
    price: "5 BYN",
    description: "Regular Match"
}

const successMessage = {
    type: 'success',
    content: "Event created",
} as const

const errorMessage = {
    type: 'error',
    content: "Something went wrong",
} as const

const CreateEventForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [locations, setLocations] = useState<IEventLocation[]>([])
    const onFinish = async (values: ICreateEventFormValues) => {
        const dayjsObj = values.dateTime
        const normalizedDate = dayjsObj.format('YYYY-MM-DD HH:mm:ss')

        Telegram.WebApp.sendData(JSON.stringify({
            ...values,
            date: normalizedDate,
        }))

        messageApi.open(successMessage);
    };

    const onFinishFailed = () => {
        messageApi.open(errorMessage);
    };

    const onDropdownVisibleChange = (isVisible: boolean) => {
        if (isVisible) {
            httpApi.getEventsLocations().then((locations) => {
                setLocations(locations)
            })
        }
    }

    return <>
        {contextHolder}
        <Form
            layout={"vertical"}
            name="basic"
            onFinish={onFinish}
            initialValues={initialValues}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<IEventRaw> label="Place" name="location" rules={[{required: true}]}>
                <Select allowClear options={locations} fieldNames={{label: "title", value: "id"}}
                        onDropdownVisibleChange={onDropdownVisibleChange}/>
            </Form.Item>

            <Form.Item<IEventRaw> label="Date" name="dateTime" rules={[{required: true}]}>
                <DatePicker format={'YYYY-MM-DD HH:mm:ss'} showTime style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item<IEventRaw> label="Price" name="price" rules={[{required: true}]}>
                <Input/>
            </Form.Item>

            <Form.Item<IEventRaw> label="Participants Limit" name="participantsLimit" rules={[{required: true}]}>
                <InputNumber style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item<IEventRaw> label="Description" name="description" rules={[{required: true}]}>
                <Input/>
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
}

export {CreateEventForm}
