import { Component } from "react";
// import API from "./Api/Api"

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";

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
  
handleClickImg = event => {
    const imgForModal = event.target.dataset.src;
    const altForModal = event.target.alt;
    this.setState({
      showModal: true,
      modalImg: imgForModal,
      modalAlt: altForModal,
    });
  };
  
  handleClickBtn = () => {
    this.setState(({ page }) => {
      return { page: page + 1, status: 'pending' };
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitInput} />
        <ImageGallery onClickImg={this.handleClickImg} query={this.state.query} />
        <Button handleClickBtn={this.handleClickBtn} />
      </>
    )
  }
}



