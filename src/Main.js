import React from "react";
import axios from "axios"

export default class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { user: "" }
    }

    componentDidMount() {
        var self = this;
        axios.get('https://api.github.com/users/theMistletoe')
            .then(function(response) {
                console.log(response.data)
                self.setState({user: response.data.login})
            })
            .catch(function(error) {
                console.log(error)
            });
    }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <p data-testid="name">{this.state.user}</p>
      </div>
    );
  }
}
