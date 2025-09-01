import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

// to receive data (same method as sending data just use the useer variable instead of setUser)
function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile