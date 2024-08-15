import { Component } from "react";

class Login extends Component{
    state = {email:"",password:"",message:""} 
    onEmail =(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    onPassword =(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    onSuccess=(token)=>{
        localStorage.setItem('token', token);
        const {history} = this.props
        history.push("/user-detail")
    }

    onLogin = async (event)=>{
        event.preventDefault() 
        const {email, password } = this.state;
        const userdetails = {email, password };
        const url="http://localhost:3000/login"
        const options={
            method:"POST",
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(userdetails),
        }
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok) {
            this.onSuccess(data.jwtToken)
        } else {
            this.setState({ message: data.errorMsg });
        }
    }
    render(){
        const {email,password,message} = this.state 
        return (
            <>
             <div>
                <h1> Login </h1>
                <form onSubmit={this.onLogin}>
                    <input type="email" value={email} placeholder="Email" onChange={this.onEmail} />
                    <input type="password" value={password} placeholder="Password" onChange={this.onPassword} />
                    <button type="submit" > Login </button>
                </form>
                <p> {message} </p>
             </div>
            </>
        )
    }
}

export default Login 