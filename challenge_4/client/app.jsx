import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
//TODO React Paginate
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      page: 1,
      result: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
  }

  handleChange(event) {
    console.log('yooo ', this);
    this.setState({
      searchTerm: event.target.value
    });
  }

  searchEvents() {

    axios.get(`http://localhost:3000/events?q=${this.state.searchTerm}`)
      .then(response => {
        console.log('get req success: ', response);
        this.setState({
          page: 1,
          result: response
        });
        $('#searchInput').val('');
      })
        .catch(err => {
          console.log('get req error: ', err);
          $('#searchInput').val('');
        });
  }

  render() {

    return(
    <div id="main-div">
      <input type="text" id="searchInput" onChange={this.handleChange}></input>
      <button onClick={this.searchEvents}>Search</button>
      <div id="result"></div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
