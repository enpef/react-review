import React, { Component } from 'react';
import Layout from './Layout';
import Button from './button';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    star: "",
    Languages: "",
    fork: "",
    plus: 0,
    minus: 0,
    img: "http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/react')
    .then( res => {
      return res.json()
    })
    .then( res => this.setState({ 
      star: res.stargazers_count,
      Languages: res.language,
      fork: res.forks,
      img: res.organization.avatar_url
    }))

  }

  plus = () => {
    this.setState({ plus: this.state.plus + 1, star: this.state.star + 1})
  }

  minus = () => {
    this.setState({ minus: this.state.minus + 1, star: this.state.star - 1})
  }

  render() {
    return (
      <div>
        <Layout>
          <img className="img" src={this.state.img}></img>
          <ul class="menu-list">
            <li>Languages: {this.state.Languages}</li>
            <li>Star: {this.state.star}</li>
            <li>Forks: {this.state.fork}</li>
          </ul>
        </Layout>

        <div>
          <p>plus button: {this.state.plus}</p>
          <p>minus button: {this.state.minus}</p>
        </div>

        <div>
          <Button click={this.plus} type="+"/>
          <Button click={this.minus} type="-"/>
        </div>
    </div>
    );
  }
}

export default App;
