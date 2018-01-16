import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }


  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login ') {
      return (
        <Link to='/signup'>SignUp</Link>
      );
    } else {
      return (
        <Link to='/login'>Login</Link>
      );
    }
  }

  render (){
    return (
      <div className="login-submit-form">
        <h3>Hi! Please {this.props.formType} or {this.navLink()}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input onChange={this.update('username')} value={this.state.username}></input>
          </label>
          <label>Password
            <input type='password' onChange={this.update('password')} value={this.state.password}></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }


}

export default withRouter(SessionForm);
