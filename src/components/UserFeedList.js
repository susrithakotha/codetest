import React from "react";
import "./UserFeedList.css";

class UserFeedList extends React.Component {
  render() {
    return this.props.list.map((feed, index) => (
      <div className="feed-item" key={index}>
        <p>{feed.title}</p>
        <img src={feed.imgUrl} alt={feed.title} />
      </div>
    ));
  }
}

export default UserFeedList;
