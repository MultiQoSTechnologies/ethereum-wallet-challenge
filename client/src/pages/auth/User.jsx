import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth'
import useLogout from "../../hooks/useLogout"
import useUser from '../../hooks/useUser'

export default function User() {

    const { user } = useAuth()

    const navigate = useNavigate()
    const logout = useLogout()
    const [loading, setLoading] = useState(false)
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])


    async function onLogout() {
        setLoading(true)

        await logout()
        navigate('/')
    }
    
    return (
        <div className='container mt-3'>
            User Id:<h4> {user?.id}</h4>
            User Name : <h4>User Name : {user?.username}</h4>
            Email : <h4>{user?.email}</h4>
            First Name:<h4> {user?.first_name}</h4>
            Last Name :<h4> {user?.last_name}</h4>
            Is Staff :<h4> {user?.is_staff ? user?.is_staff: "-"}</h4>
            
            <button disabled={loading} type='button' onClick={onLogout}>Logout</button>
        </div>
    )
}
