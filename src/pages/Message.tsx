import React, {useEffect, useState} from "react";
import { Container } from "../components/Container";
import Text from "../components/Text";
import axios from "axios";
import { Helmet } from "react-helmet";

interface Item {
    title: string;
    desc: string;
    price: string;
}

const Message: React.FC = () => {
    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/data");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Message - data page</title>
                <meta name="description" content="Page with some data from server"/>
                <meta name="keyword" content="data, server, get"/>
            </Helmet>
            <Container>
                <div className="flex flex-col gap-4">
                    <Text size="large">Данные с сервера:</Text>
                    {data.length > 0 ? (
                        <ul className="space-y-2">
                            {data.map((item, index) => (
                                <li key={index}>
                                    <Text size="medium">
                                        {item.title} - {item.desc} - {item.price}
                                    </Text>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Text size="medium">Нет данных</Text>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Message;