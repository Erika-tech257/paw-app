import React, { Component } from 'react'
import './UserProfile.css'

interface ProfileProps {
    updateUser: (username: string) => void


}



class UserProfile extends Component<ProfileProps,{}>{
    constructor(props: ProfileProps) {
        super(props)

    }

        // let PAW = localStorage.getItem('userID')
        // const fetchDisplayName= async () => {
        //     let res = await fetch(`http://localhost:5000/user/${PAW}`)
        //     let json = await res.json()
        //     console.log(json)
        //     this.setState({displayName:json.user.displayName})

        // }
            
        
    
   
    
    render() {
        return (
            <div className='UserProfile'>
                <p>{`Welcome:${localStorage.getItem('username')}`}</p>
            </div>
        )
    }
}
export default UserProfile 