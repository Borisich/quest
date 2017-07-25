import React, { Component } from 'react';
import { connect } from 'react-redux';
import Site from '../components/site/site.jsx'



 class SitePage extends Component {
  render(){
    console.log("site-page's this.props.view:");
    console.log(this.props.view);
    if (this.props.view != "SHOW_SITE") {
      return null
    }

    return (
      <div className="sitePage">
        <Site />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(SitePage);
