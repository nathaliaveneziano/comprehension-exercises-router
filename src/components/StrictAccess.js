import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Home';

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;

    const access = (
    <div>
      <h2> Strict Access </h2>
      <p> Welcome joao! </p>
    </div>);

    const denied = <Redirect to="/" component={ Home } />;

    return (
      <div>
        { (username.toLowerCase() === 'joao' && password === '1234') ? access : denied }
      </div>
    );
  }
}

export default StrictAccess;