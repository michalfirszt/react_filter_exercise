import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class People extends Component {
  static propTypes = {
    filterQuery: PropTypes.string,
    people: PropTypes.array
  };

  peopleList = () => {
    return this.props.people.filter(
        person => person.name.toUpperCase().includes(this.props.filterQuery.toUpperCase())
      ).map(person => {
      return (
        <div className='App-box' key={person.id}>
          {person.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.peopleList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterQuery: state.peopleReducer.filterQuery,
  people: state.peopleReducer.people
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);
