import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class BillingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  addBilling() {
    var billing = {
      name: this.props.username,
      billing: {
        creditCardNum: $('#creditCardNum').val(),
        expiration: $('#expiration').val(),
        CVV: $('#CVV').val(),
        zip: $('#zip').val()
      }
    };
    console.log('billing sent: ', billing);
    axios.patch('/api/billing', billing)
      .then((response) => {
        console.log('PATCH REQ SUCCESS: ', response);
        $('#creditCardNum').val('');
        $('#expiration').val('');
        $('#CVV').val('');
        $('#zip').val('');
      })
        .catch((err) => {
          console.log('PATCH REQ SUCCESS: ', err);
          $('#creditCardNum').val('');
          $('#expiration').val('');
          $('#CVV').val('');
          $('#zip').val('');
        });
  }

  render() {
    return(
      <div id="billing-info">
        <h3>Billing Info</h3>
        <div>Credit Card #: <input type="text" id="creditCardNum"></input></div>
        <div>CVV: <input type="text" id="CVV"></input></div>
        <div>Expiration Date: <input type="text" id="expiration"></input></div>
        <div>Billing Zip Code: <input type="text" id="zip"></input></div>
        <button onClick={() => {
            this.addBilling();
            this.props.handleClick('checkout');}}>Purchase</button>
      </div>
    )
  }
}

export default BillingInfo;
