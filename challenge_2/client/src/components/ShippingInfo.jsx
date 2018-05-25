import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class ShippingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  addShipping() {
    var shipping = {
      name: this.props.username,
      address: {
        line1: $('#line1').val(),
        line2: $('#line2').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zip: $('#zip').val()
      },
      phone: $('#phoneNum').val()
    };
    console.log('shipping sent: ', shipping);
    axios.patch('/api/shipping', shipping)
      .then((response) => {
        console.log('PATCH REQ SUCCESS: ', response);
        $('#line1').val('');
        $('#line2').val('');
        $('#city').val('');
        $('#state').val('');
        $('#zip').val('');
      })
        .catch((err) => {
          console.log('PATCH REQ ERR: ', err);
          $('#line1').val('');
          $('#line2').val('');
          $('#city').val('');
          $('#state').val('');
          $('#zip').val('');
        });
  }

  render() {
    return(
      <div id="shipping-info">
        <h3>Shipping Info</h3>
        <div>Line 1: <input type="text" id="line1"></input></div>
        <div>Line 2: <input type="text" id="line2"></input></div>
        <div>City: <input type="text" id="city"></input></div>
        <div>State: <input type="text" id="state"></input></div>
        <div>Zip Code: <input type="text" id="zip"></input></div>
        <div>Phone #: <input type="text" id="phoneNum"></input></div>
        <button onClick={() => {
            this.addShipping();
            this.props.handleClick('billing');}}>Next</button>
      </div>
    )
  }
}

export default ShippingInfo;
