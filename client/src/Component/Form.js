import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

export default function Form() {


    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        state: ''
    })

    const [msg, setMsg] = useState('')

    let targetName, targetValue
    const changeHandler = (events) => {
        targetName = events.target.name;
        targetValue = events.target.value;

        setUser({ ...user, [targetName]: targetValue })

    }

    const submitHandler = events => {
         
        events.preventDefault();
        const { name, state } = user;

        axios.post('/post', user)
            .then(res => {
                console.log(res)
                setMsg(res.data)
                console.log("msg " + msg)  
            }).catch(err => console.log(err))

    }

    return (
        <div className='container-sm my-5 w-50 ml-5'>
            <h3>Submit Detail</h3>

            {
                msg.length ? <div class="alert alert-warning" role="alert">
                    {msg}
                </div> : null
            }

            <form className='' onSubmit={submitHandler} method='POST'>
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
