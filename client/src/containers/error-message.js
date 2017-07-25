import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorMessage extends Component {
  render(){
    if (this.props.view != "SHOW_ERROR") {
      return null
    }
    return (
      <div className="errorMessage">
        Wrong login or password!
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(ErrorMessage);
