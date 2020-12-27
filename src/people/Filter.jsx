import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class Filter extends Component {
  static propTypes = {
    filterQuery: PropTypes.string
  };

  handleOnChange = text => {
    this.props.updateQuery(text);
  };

  render() {
    return (
      <div className='App-box'>
        <input
          type="text"
          value={this.props.filterQuery}
          onChange={event => this.handleOnChange(event.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.peopleReducer.filterQuery
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateQuery: filterQuery => dispatch({ type: 'UPDATE_QUERY', payload: filterQuery })
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
