import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorMessage extends Component {
  render(){
    if (this.props.view.name != "SHOW_ERROR") {
      return null
    }
    var s = "";
    (this.props.view.text == "") ? s="Нужно хотя-бы попытаться! Думай, мать!" : s="Не правильно! Это не " + this.props.view.text;
    return (
      <div className="errorMessage">
        {s}
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
