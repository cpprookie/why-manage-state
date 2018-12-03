import * as React from 'react';

interface loginState {
  userName: string,
}

export default class Login extends React.Component{
  state: loginState = {
    userName: '',
  }

  updateUserName(e: React.ChangeEvent) {
    this.setState({ userName: e.target.nodeValue });
  }

  loginHandler() {
    // request login
  }

  render() {
    return (
      <div className="login-form">
        <p className="inline-form">
          <span>UserName:</span>
          <input type="text" onChange={this.updateUserName} />
        </p>
        <p className="inline-form">
          <button>login</button>
        </p>
      </div>
    );
  }
}
