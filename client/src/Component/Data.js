import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {NavLink, useParams} from 'react-router-dom'
import Form from './Form'

function Data() {



    
    const [post, setPost] = useState([]);
    const [error, setError] = useState();




    useEffect(() => {
        axios.get('/getData').then((res) => {
           setPost(res.data)
        }).catch(err => {
            console.log(err);
            setError(err)
             
        })
    },[])

   

    return (

        <div className='d-flex container-sm '>
            <table className="table container-sm me-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.length ? post.map(e =>
                            <tr key={e._id}>
                                <th scope="row"></th>
                                <td>{e.name}</td>
                                <td>{e.state}</td>
                                <td> <NavLink exact to={'/edituser/' + e._id}>Edit </NavLink>
                                    <NavLink exact to={'/delUser/' + e._id}>Del </NavLink></td>

                            </tr>) : null
                    }
                </tbody>
            </table>


            <Form />
        </div>
    )
}

export default Data







