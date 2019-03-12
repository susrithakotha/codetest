import React, { Component } from "react";
import "./App.css";
import UserFeedList from "./components/UserFeedList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFeedList: [],
      isError: false,
      userFeed: {
        title: "",
        imgUrl: ""
      }
    };
  }

  handleChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      userFeed: {
        ...prevState.userFeed,
        [eve.target.id]: [eve.target.value]
      }
    }));
  };

  handleAddFeed = () => {
    if (this.state.userFeed.imgUrl === "" || this.state.userFeed.title === "") {
      this.setState({
        isError: true
      });
    } else {
      const list = [...this.state.userFeedList];
      list.push(this.state.userFeed);
      this.setState({
        userFeedList: list,
        isError: false
      });
    }
  };

  render() {
    return (
      <div className="main-entry">
        <header className="header">
          <h1>Test</h1>
        </header>
        <div className="content-container">
          <div className="add-feed-container">
            <input
              type="text"
              id="imgUrl"
              placeholder="Enter feed image URL"
              value={this.state.userFeed.imgUrl}
              onChange={this.handleChange}
            />
            {this.state.isError && this.state.userFeed.imgUrl === "" && (
              <p className="error-text">Please enter feed image URL</p>
            )}
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter feed title"
              value={this.state.userFeed.title}
              onChange={this.handleChange}
            />
            {this.state.isError && this.state.userFeed.title === "" && (
              <p className="error-text">Please enter feed title</p>
            )}
            <div>
              <button onClick={this.handleAddFeed}>Add Feed</button>
            </div>
          </div>

          <UserFeedList list={this.state.userFeedList} />
        </div>
      </div>
    );
  }
}

export default App;
