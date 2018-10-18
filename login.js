'use strict';

const e = React.createElement;

  class Login extends React.Component {
    state = {
      user_id: '',
      password: '',
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    onSubmit = async () => {
      const response = await this.props.mutate({
        variables: this.state,
      });
      console.log(response);
    }
    constructor(params) {
      super(params);
      this.state = { clients: [] };
    };

    componentDidMount() {
      const user_id = 'angryfish882';
      const password = 'wwww';

      const hmac = new jsSHA('SHA-256', 'TEXT');
      hmac.setHMACKey(password, 'TEXT');
      hmac.update(user);
      hmac.update(Date.now().toString(36).substring(0, 4));

      const token = `${hmac.getHMAC('HEX')}%${user}`;

      const api = axios.create({
        baseURL: 'http://45.77.58.134:8080',
        headers: { 'Authorization': 'Bearer ' + token }
      });
      function writeName() {
        var userID = document.getElementById('user_id');
        var password = document.getElementById('password');
        var formContent = document.getElementById('login')

        userID.innerHTML = statements.html;

        formContent.innerHTML = "";

      }

      const domContainer =
      document.querySelector('#login');
      ReactDOM.render(e(Login), domContainer);

      (async () => {
        const res = await api.get('/clients');
        const accounts = await api.get(`/accounts/${res.data[0]._id}`)
        this.setState({clients: res.data});
        console.log(accounts);
      })();
    };

    render() {
      return (
        <div>
          <Input
            name = 'angryfish882'
            placeholder='Username'
            onChange={e => this.onChange(e)}
            value={this.state.user_id} />
          <Input
            name='password'
            placeholder='Password'
            type='password'
            onChange={e => this.onChange(e)}
            value={this.state.password} />}
          <br />
          <Button onclick={() => this.onSubmit()} type="primary">Sign In</Button>
        </div>
      )
    }
  }

  ReactDOM.render(<Login />, document.getElementById('render-element'));
