import { useState } from "react";
import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, [id]);

    return (
        <>
            <ItemList items={items} /> 
        </>
    )
}

export default ItemListContainer;