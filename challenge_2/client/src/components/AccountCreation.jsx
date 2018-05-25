import React from 'react';

class AccountCreation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="shipping-info">
        <h3>Shipping Info</h3>
        <div>Line 1: <input type="text"></input></div>
        <div>Line 2: <input type="text"></input></div>
        <div>City: <input type="text"></input></div>
        <div>State: <input type="text"></input></div>
        <div>Zip Code: <input type="text"></input></div>
        <div>Phone #: <input type="text"></input></div>
      </div>
    )
  }
}

export default AccountCreation;
