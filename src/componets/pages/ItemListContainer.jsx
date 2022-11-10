import React from "react";
import { useState, useEfect } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { productosHC } from "./data.jsx";
import ItemList from "./ItemList.jsx";
export default function ItemListeContainer({ greeting }) {
    const { idcategory } = useParams();

    const [porductos, setProductos] = useState([]);
    
    useEffect(() => {
        const productosPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosHC);
            }, 2000);
        });
    
    
        productosPromise.then((res) => {
            if (idcategory) {
                setProductos(res.filter((item) => item.category == idcategory));
            } else {
                setProductos(res);
            }
        });
    }, [idcategory]);
    
    return <div style={{border: "2px solid red", margin: "10px"}}>
    <ItemList productos={productos} />
    </div>}