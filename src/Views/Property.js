import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';
function Property() {
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    let property = useAxiosGet(url)

    let content = null

   
    if (property.error) {
        content = <p>Error!. Something Wrong</p>
    }
    
    if (property.loading) {
        content = <Loader></Loader>
    }

    if (property.data) {
        content = property.data.name;
    }
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">{content}</h1>
            <p>
                This is the client page content.
            </p>
        </div>
    )
}

export default Property