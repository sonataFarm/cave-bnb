import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const _emptyForm = {
  username: '',
  password: ''
}

class SessionForm extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.loggedIn);
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/')
  //   }
  // }
  //
  // componentWillMount() {
  //   if (this.props.loggedIn) {
  //     this.props.history.push('/')
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = _emptyForm;

    this.header = this.header.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  header() {
    let text = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    return <h1>{text}</h1>;
  }

  navLink() {
    let text, path;

    if (this.props.formType === 'signup') {
      text = 'log in';
      path = '/login';
    } else {
      text = 'sign up';
      path = '/signup';
    }

    return <Link to={path}>{text} instead</Link>;
  }

  updateField(type) {
    return e => this.setState({[type]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.processForm(user);
    this.setState(_emptyForm);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.navLink()}
        {this.header()}
        {this.renderErrors()}
        <ul>

        </ul>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.updateField('username')}
          />
          <label>Password:</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.updateField('password')}
          />
          <input
            type="submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default SessionForm;
