import React, { Component } from 'react'

export class signIn extends Component {
    state ={
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state)
    }

  render() {
    return (
      <div className="container">
        
            <form onSubmit={this.handleSubmit} className="white signin">
                <h5 className="grey-text text-darken-3 ">SignIn</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="validate" onChange={this.handleChange} />
                </div>
                <div className="input-field ">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="validate" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
            </div>
        
      
    )
  }
}

export default signIn
