import React from 'react';
import {Button, Input,} from 'antd';
import { gql, graphql} from 'react-apollo';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    }

  onsubmit = async () => {
    const resonse = await this.props.mutate({
      variables: this.state,
    });
    console.log(response);
  }

  render() {
    return (
      <div>
        <Input
        name='username'
        placeholder='Username'
        onChange={e => this.onChange(e)}
        value={this.state.username} />
        <Input
        name='password'
        placeholder='Password'
        onChange={e => this.onChange(e)}
        value={this.state.password} />
        <br />
        <Button onClick={() => this.onSubmit()} type="primary">Sign In</Button>
      </div>
    );
  }
}

const mutation = gql
mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    refreshtoken
  }
}
;

export default graphql(mutation)(Register);
