import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class AccountCreation extends React.Component {
  constructor(props) {
    super(props);
  }

  createAcct() {
    var acct = {
      name: $('#name').val(),
      email: $('#email').val(),
      password: $('#password').val()
    };
    // this.props.setUserName($('#name').val());
    axios.post('/api/acctCreation', acct)
      .then((response) => {
        console.log('POST REQ SUCCESS: ', response);
        $('#name').val('');
        $('#email').val('');
        $('#password').val('');
      })
        .catch((err) => {
          console.log('POST REQ ERROR: ', err);
          $('#name').val('');
          $('#email').val('');
          $('#password').val('');
        })
  }

  render() {
    return(
      <div id="shipping-info">
        <h3>Account Creation</h3>
        <div>Name: <input type="text" id="name"></input></div>
        <div>Email: <input type="text" id="email"></input></div>
        <div>Password: <input type="password" id="password"></input></div>
        <button onClick={() => {
            this.props.setUserName($('#name').val());
            this.createAcct();
            this.props.handleClick('shipping');}}>Next</button>
      </div>
    )
  }
}


// const AccountCreation = (props) =>
//     (
//       <div id="acct-create">
//         <h3>Shipping Info</h3>
//         <div>Line 1: <input type="text"></input></div>
//         <div>Line 2: <input type="text"></input></div>
//         <div>City: <input type="text"></input></div>
//         <div>State: <input type="text"></input></div>
//         <div>Zip Code: <input type="text"></input></div>
//         <div>Phone #: <input type="text"></input></div>
//         <button onClick={() => {props.handleClick('shipping')}}>Next</button>
//       </div>
//     )


export default AccountCreation;
