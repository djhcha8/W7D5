import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
  }


  // user logged in
  // write a function to greet the user with their user name, show logout button

  personalGreeting(){
    return (
      <div className='personal-greeting'>
        <h3>Hi! {this.props.currentUser.username}!</h3>
        <button className="session-button"
          onClick={this.handleLogout}>LogOut
        </button>
      </div>
    );
  }

  // user logged out

  sessionLinks(){
    return (
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>
    );
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){
    return (
      this.props.currentUser ? this.personalGreeting() : this.sessionLinks());

  }
}

export default Greeting;
