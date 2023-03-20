import { Component } from "react";
// import API from "./Api/Api"

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from 'components/ImageGallery/ImageGallery';

export default class App extends Component {

  state = {
    status: 'idle',
    query: [],
    page: 1,
    name: '',
    modalAlt: '',
    showModal: false,
    modalImg: '',
    error: null,
  };

handleSubmitInput = newQuery => {
    if (newQuery !== this.state.name) {
      this.setState({ name: newQuery, page: 1, status: 'pending' });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitInput} />
        <ImageGallery/>
      </>
    )
  }
}



