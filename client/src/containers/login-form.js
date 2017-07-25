import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSite } from '../actions/index';
import { showForm } from '../actions/index';
import { showError } from '../actions/index';
import { bindActionCreators } from 'redux';
import sha256 from 'js-sha256';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      login: '',
      password: '',
      showLoading: false
    }
    this.onFormChange =  this.onFormChange.bind(this);
    this.sendForm =  this.sendForm.bind(this)
  }
  onFormChange(e){
    switch (e.target.name) {
      case 'login':
        this.setState({
          login: e.target.value
        })
        break;
      case 'password':
        this.setState({
          password: e.target.value
        })
        break;
      default:
    }
  }
  sendForm(e){
    e.preventDefault();
    var self = this;
    var data = {
      login: self.state.login,
      password: sha256(self.state.password)
    }
    //socket.emit('login-data', data);
    self.props.showForm();
    /*self.setState({
      showLoading: true
    });*/
    console.log('Form sended. sended data: ');
    console.log(data);
    /*socket.on('result', function(data){
      self.setState({
        showLoading: false
      });
      if (data == 'OK') {
        self.props.showSite();
      }
      else{
        self.props.showError();
      }
    });*/
    if ((data.login == "гунечка") || (data.login == "Гунечка")) {
        self.props.showSite();
    }
    else {
        console.log("error with text: "+data.login);
        self.props.showError(data.login);
    }
  };
  render(){
    if (this.props.view.name == "SHOW_SITE") {
      return null
    }
    var img = <img className="loadingImg" src="./img/loading.gif" height='30px'/>
    return (
        <div className="align-wrapper">

          <div className="formContainer">
              <h1>Настало время для проявления смекалки!</h1><br />
              Отгадай загадку: <span className="question">Кто на свете всех милее, всех румяней и жирнее?</span>
               <br /> <br />
            <form onSubmit={this.sendForm}>
              Ответ: <input name='login' type='text' width='40px' onChange={this.onFormChange} value={this.state.login}></input>
              <br />

              <br /><br />
              <button >Проверить</button><br />
              {(this.state.showLoading) ? img : null}
            </form>
          </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    view: state.view
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showSite: showSite, showError: showError, showForm: showForm}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
