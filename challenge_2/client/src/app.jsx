import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import AccountCreation from './components/AccountCreation.jsx';
import BillingInfo from './components/BillingInfo.jsx';
import ShippingInfo from './components/ShippingInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'checkout'
    }

    this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      page: page
    });
  }

  render() {
    let page;
    if (this.state.page === 'acctCreate') {
      page = <AccountCreation handleClick={this.changePage} />;
    } else if (this.state.page === 'shipping') {
      page = <ShippingInfo handleClick={this.changePage} />;
    } else if (this.state.page === 'billing') {
      page = <BillingInfo handleClick={this.changePage} />;
    } else if (this.state.page === 'checkout') {
      page = <button onClick={() => {this.changePage('acctCreate');}}>Checkout</button>;
    }

    return(
      <div id="app">
        {page}
      </div>
    )
  }
}

export default App;
