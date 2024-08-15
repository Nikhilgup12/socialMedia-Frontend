import {Component} from "react"

class Register extends Component{
    state={name:"",phone:"",email:"",password:"",profilePhoto:null}

    onName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    
    
    onPhone=(event)=>{
        this.setState({
            phone: event.target.value
        })
    }
    
    onEmail=(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    
    onFile=(event)=>{
        this.setState({
            profilePhoto: event.target.files[0]
        })
    }
    
    onPassword=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    
    onSuccess =() =>{
        const {history} = this.props
        history.replace("/login")
    }

    handleSubmit = async (event)=>{
        event.preventDefault()
        const {name,phone,email,password,profilePhoto} = this.state 

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profilePhoto',profilePhoto);
        const url = "http://localhost:3000/register"
        const options={
            method:"POST",
            body: formData
        }
        const response = await fetch(url,options)
        if (response.ok){
            this.onSuccess()
        }
    }

    render(){
        const {name,phone,email,password} = this.state 
        return (
            <>
             <div>
                <h1> Register </h1>
                <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onName}
                    placeholder="Name"
                /> <br/>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.onPhone}
                    placeholder="Phone"
                /> <br/>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onEmail}
                    placeholder="Email"
                /> <br/>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.onPassword}
                    placeholder="Password"
                /> <br/>
                <input
                    type="file"
                    name="profilePhoto"
                    onChange={this.onFile}
                /> <br/>
                <button type="submit">Register</button>
            </form>
             </div>
            </>
        )
    }
}

export default Register 