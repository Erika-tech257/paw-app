import React, { Component } from 'react'
import './UserProfile.css'

interface ProfileProps {
    updateUser: (username: string) => void
}



class UserProfile extends Component<ProfileProps,{}>{
    constructor(props: ProfileProps, any:any  ) {
        super(props)

    }


                
    render() {
        return (
            <div className='UserProfile'>
                <p>{`Welcome:${localStorage.getItem('username')}`}</p>
            </div>
        )
    }
}
export default UserProfile 