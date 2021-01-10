import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class Filter extends Component {
  static propTypes = {
    filterQuery: PropTypes.string
  };

  handleOnChange = event => {
    this.props.updateQuery(event.target.value);
  };

  render() {
    return (
      <div className='App-box'>
        <input
          type='text'
          placeholder='Filter'
          value={this.props.filterQuery}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterQuery: state.peopleReducer.filterQuery
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateQuery: filterQuery => dispatch({ type: 'UPDATE_QUERY', payload: filterQuery })
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
