import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGet(url, params){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })
    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url, {
                params: params
            })
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}