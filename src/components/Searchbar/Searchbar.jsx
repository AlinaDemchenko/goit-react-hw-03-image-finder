import { StyledSearchbar } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Searchbar extends Component {
  handlerSubmit = evt => {
    evt.preventDefault();
    this.props.onSearchPictures(evt.target.elements.search.value);
  };
  render() {
    return (
      <StyledSearchbar>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSearchPictures: PropTypes.func.isRequired,
};

export default Searchbar;
