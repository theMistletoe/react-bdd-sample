import React from "react";
import axios from "axios"

export default class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { user: "", url: "" }
    }

    async componentDidMount() {
        const response = await axios.get('https://api.github.com/users/theMistletoe')
        this.setState({user: response.data.login})
        this.setState({url: response.data.html_url})
    }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <form>
            <div>
                <label>
                    Name:
                    <input type="text" placeholder="Input GitHub Name"></input>
                </label>
            </div>
            <div>
              <button type="submit">
                Send
              </button>
            </div>
        </form>
        <ul>
          <li data-testid="name">{this.state.user}</li>
          <li data-testid="url">{this.state.url}</li>
        </ul>
      </div>
    );
  }
}
