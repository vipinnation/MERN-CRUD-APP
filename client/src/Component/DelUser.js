import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'

function DelUser() {

    const {id} = useParams();
    const history = useHistory();

    useEffect( ()=>{
        axios.get(`/delUser/${id}`)
        .then(res => {
            console.log(res)
            history.push('/')
        })
        .catch(err => console.log(err))

    },[])
    return (
        <div>
            
        </div>
    )
}

export default DelUser
