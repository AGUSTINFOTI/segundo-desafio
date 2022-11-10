import React from 'react'
import { Link} from "react-router-dom"
import { productosHC } from './data'
export default function ItemList({productos}) {
  return (
    <div>
        {!productosHC.length && "loading..."}
        {productosHC.map((item) => (
            <div key={item.id}>
                {JSON.stringify(item)}
                
                <link to={"/item/"+ item.id}>IR AL ITEM</link>
                <br />
                <br />
                </div>
        ))}
    </div>
  )
}
