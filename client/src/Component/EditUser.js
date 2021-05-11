import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import axios from 'axios'

function EditUser() {

    const history = useHistory()
    const { id } = useParams();
    const [user, setUser] = useState({
        _id: '',
        name: '',
        state: ''
    })


    useEffect(() => {
        axios.get(`/editUser/${id}`)
            .then(res => {
                console.log(res.data);
                setUser(res.data)

                console.log('User :- ' + user.name)
            })
    }, [])


    const changeHandler = (events) => {
        setUser({ ...user, [events.target.name]: events.target.value })

    }

    const submitHandler = (events) => {
        events.preventDefault();
        console.log(user)

        const { name, state } = user;

        const dataInput = {
            name: name,
            state: state
        }

        axios.post(`/editUser/${id}`, dataInput).then(res => {

            console.log(res)
            history.push('/')
        })
    }

    return (
        <div className='container-sm my-5 w-50 ml-5'>
            <h3>Update User Detail</h3>


            <form className='' method='POST' onSubmit={submitHandler}>
                <div className="mb-3 mx-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={user.name} onChange={changeHandler} />

                </div>
                <div className="mb-3 mx-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='state' value={user.state} onChange={changeHandler} />
                </div>

                <div className='my-auto'>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser
