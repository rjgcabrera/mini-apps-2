import React from 'react';

class BillingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="billing-info">
        <h3>Billing Info</h3>
        <div>Credit Card #: <input type="text"></input></div>
        <div>CVV: <input type="text"></input></div>
        <div>Expiration Date: <input type="text"></input></div>
        <div>Billing Zip Code: <input type="text"></input></div>
      </div>
    )
  }
}

export default BillingInfo;
