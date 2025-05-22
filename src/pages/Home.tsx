import React, { Component, useEffect, useState } from "react";
import Button from "../components/Button";
import { Container } from "../components/Container";
import Input from "../components/Input";
import Text from "../components/Text";
import Modal from "../components/Modal";
import {Helmet} from "react-helmet";

const Home =() =>{
    const [items, setItems] = useState([{title: "Apple", desc: "fruit", price:"30$"}])
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Helmet>
                <title>
                    Home - Product List
                </title>
                <meta name = "description" content="Buy our products"/>
                <meta name = "keyword" content="products, shopping, buying, market"/>
            </Helmet>
            <Container>
                <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
                    <h1><Text size="large">Список</Text></h1>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.title} {item.desc} {item.price}</li>
                        ))}
                    </ul>
                    <Button color="primary" size="large" title="Добавить" onClick={() => setIsModalOpen(true)}/>
                        <Modal 
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)} 
                            title="Добавление нового продукта"
                            items={items}
                            setItems={setItems}>
                        </Modal>
                </div>
            </Container>
        </>
        );
}
 
export default Home;