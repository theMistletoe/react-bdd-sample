import React from "react";
import axios from "axios"

export default class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { user: "", url: "" }
    }

    componentDidMount() {
        var self = this;
        axios.get('https://api.github.com/users/theMistletoe')
            .then(function(response) {
                console.log(response.data)
                self.setState({user: response.data.login})
                self.setState({url: response.data.html_url})
            })
            .catch(function(error) {
                console.log(error)
            });
    }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <ul>
          <li data-testid="name">{this.state.user}</li>
          <li data-testid="url">{this.state.url}</li>
        </ul>
      </div>
    );
  }
}
