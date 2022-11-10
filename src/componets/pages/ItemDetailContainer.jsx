import React from 'react'
import { useState, useEffect } from 'react';
import{ useParams } from "react-router-dom";

export default function ItemDetailContainer({greeting}) {
    const { iditem } = useParams();

    const[producto, setProdcto] = useState{{}};
    let productosHC = [
        {id: 100, name: "malvones", category: "planta", precio:100 },
        {id: 101, name: "alamo", category: "planta", precio:154 },
        {id: 102, name: "cactus", category: "planta", precio:160 },
        {id: 103, name: "aloevera", category: "planta", precio:145 },
        {id: 104, name: "albaca", category: "planta", precio:134 },
        {id: 105, name: "comino", category: "planta", precio:150 },
        {id: 106, name: "lavanda", category: "planta", precio:130 },
    ]

