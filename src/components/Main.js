import React from "react";
import axios from "axios"

export default class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { user: "", url: "", inputName: "" }

        this.handleChange = this.handleChange.bind(this);
        this.fetchGitHubInfo = this.fetchGitHubInfo.bind(this);
    }

    componentDidMount() {
        // nop
    }

    handleChange(e) {
        this.setState({inputName: e.target.value}); // eslint-disable-line react/no-set-state
    }

    async fetchGitHubInfo(e) {
        e.preventDefault();
      
        const response = await axios.get(`https://api.github.com/users/${this.state.inputName}`)
        this.setState({user: response.data.login}) // eslint-disable-line react/no-set-state
        this.setState({url: response.data.html_url}) // eslint-disable-line react/no-set-state
    }

    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <form onSubmit={this.fetchGitHubInfo}>
                    <div>
                        <label>
                    Name:
                            <input type="text" placeholder="Input GitHub Name" value={this.state.inputName} onChange={this.handleChange}></input>
                        </label>
                    </div>
            
                    <div>
                        <button type="submit">
                Send
                        </button>
                        <button type="submit">
                研修
                        </button>
                        <button type="submit">
                KADO
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
