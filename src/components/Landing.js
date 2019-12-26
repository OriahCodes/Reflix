import React, { Component } from 'react';
import '../styles/landing.css'
import User from './User'

class Landing extends Component {
    constructor(){
        super()
        this.state={
            users : [
                {name: "Josef", img: "https://occ-0-2616-2774.1.nflxso.net/art/bd699/2f5075ef2c57898f34ca627377b4ccfc615bd699.png"},
                {name: "Keren", img: "https://occ-0-2616-2774.1.nflxso.net/art/6ecfa/2799a7f10e6481ef52df1800d3ddfc1176d6ecfa.png"}
            ]
        }
    }
    render() {
        let users = this.state.users
        return (
            <div id="profiles-container">
                <div className="profiles-label">Who's watching?</div>
                <ul className="choose-profile"> 
                    {users.map(u => <User user={u} key={u.name}/>)}
                </ul>
            </div>
        )
    }
}

export default Landing;