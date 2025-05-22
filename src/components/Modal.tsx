import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";
import axios from "axios";

interface ModalProps{
    isOpen:boolean;
    onClose:() => void;
    title:string;
    items:Array<{title: string, desc: string, price: string}>;
    setItems: (items: Array<{title: string, desc: string, price: string}>) => void;
}

const Modal = (props: ModalProps) => {
    const{isOpen, onClose, title, items, setItems} = props;
    if (!isOpen) return null;
    const [inputTitle, setInputTitle] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const addItem = async () =>{
        const newItem = {
            title: inputTitle,
            desc: inputDesc,
            price: inputPrice
        }
        try {
            // Send POST request to server
            const response = await axios.post("http://localhost:5000/data", newItem);
            // Update local state
            setItems([...items, response.data]);
            // Clear inputs
            setInputTitle("");
            setInputDesc("");
            setInputPrice("");
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }
    
    return(
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-[400px] relative">
                <h2><Text size="large">{title}</Text></h2>
                <form>
                    <div className="space-y-4">
                        <Input 
                            placeholder="Название продукта" 
                            value={inputTitle} 
                            onChange={(e) => setInputTitle(e.target.value)} 
                            size="medium"
                        />
                        <Input 
                            placeholder="Описание" 
                            value={inputDesc} 
                            onChange={(e) => setInputDesc(e.target.value)} 
                            size="medium"
                        />
                        <Input 
                            placeholder="цена в $" 
                            value={inputPrice} 
                            onChange={(e) => setInputPrice(e.target.value)} 
                            size="medium"
                        />
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                        <Button 
                            onClick={addItem} 
                            color="primary" 
                            title="Добавить" 
                            size="medium"
                        />
                        <Button 
                            onClick={onClose} 
                            color="secondary" 
                            size="medium" 
                            title="Закрыть"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;