import { Component } from "react"; 

class ProfileDetails extends Component{
    state = {profile:null,message:null}
    componentDidMount=()=>{
        this.getProfiledetail()
    }
    getProfiledetail= async ()=>{
        const {match} = this.props
        const {params} = match 
        const {id} = params
        const {profile} = this.state 
        // console.log(userId)
        const response = await fetch(`http://localhost:3000/profile/${id}`);

        if (response.ok) {
            const data = await response.json();
            console.log(profile)
            this.setState({profile:data});
        } else {
            this.setState({ message: 'User not found' });
        }

    }

    render() {
        const { profile, message } = this.state;

        if (message) {
            return <div>Error: {message}</div>;
        }

        if (!profile) {
            return <div>Loading...</div>;
        }

        const { name, phone, profilePhoto } = profile;

        return (
            <div>
                <h1>{name}</h1>
                <p>{phone}</p>
                {profilePhoto && <img src={profilePhoto} alt="Profile" />}
            </div>
        );
    }
}

export default  ProfileDetails 