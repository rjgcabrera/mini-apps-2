import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import EventList from './components/EventList.jsx';
//TODO React Paginate
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      page: 1,
      numPages: 0,
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
        console.log('get req success: ', Math.ceil(response.data.length / 10));
        this.setState({
          numPages: Math.ceil(response.data.length / 10)
        }, () => {
          axios.get(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=${this.state.page}&_limit=10&_sort=date`)
            .then(response => {
              console.log('get req success: ', response);
              this.setState({
                page: 1,
                result: response.data
              });
              $('#searchInput').val('');
            })
              .catch(err => {
                console.log('get req error: ', err);
                $('#searchInput').val('');
              });
        });
      })
        .catch(err => {
          console.log('get req error: ', err);
          $('#searchInput').val('');
        });

    // axios.get(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=${this.state.page}&_limit=10&_sort=date`)
    //   .then(response => {
    //     console.log('get req success: ', response);
    //     this.setState({
    //       page: 1,
    //       result: response.data
    //     });
    //     $('#searchInput').val('');
    //   })
    //     .catch(err => {
    //       console.log('get req error: ', err);
    //       $('#searchInput').val('');
    //     });
  }

  changePage() {
    axios.get(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=${this.state.page}&_limit=10&_sort=date`)
      .then(response => {
        console.log('get req success: ', response);
        this.setState({
          page: 1,
          result: response.data
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
      <EventList events={this.state.result} />
      <ReactPaginate
        className="pagination"
        pageCount={this.state.numPages}
        pageRangeDisplayed={3}
        forcePage={0}
        marginPagesDisplayed={1}
        previousLabel={"< Prev"}
        nextLabel={"Next >"}
        onPageChange={(page) => {
          this.setState({
            page: page.selected + 1
          }, this.changePage);
        }}
        />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
