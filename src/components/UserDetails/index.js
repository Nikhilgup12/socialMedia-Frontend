import { Component } from "react";

class UserDetails extends Component{
    state={message:"",user:{}}
    componentDidMount=()=>{
        this.getUserData()

    }
    getUserData =async ()=>{
        const token = localStorage.getItem('token');
        const url="http://localhost:3000/user-details"
        const options={
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await fetch(url,options)
        if (response.ok){
            const data = await response.json()
            this.setState({user: data})
        }
        else{
            this.setState({message:'Failed to fetch user details'})
        }

    }

    render(){
        const {message,user} =this.state
        const {email,name,phone,profilePhoto,qrCode}= user 
        return (
            <>
             <div>
                <h1> User details </h1>
                <div>
                <h2>User Details</h2>
                {user ? (
                    <div>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                        <img src={profilePhoto} alt="Profile" />
                        <img src={qrCode} alt="QR Code" />
                    </div>
                ) : (
                    <p>{message}</p>
                )}
            </div>
             </div>
            </>
        )
    }
}

export default UserDetails