import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retrieving Date" });
      });
  }
  render() {
    return (
      <div>
        List of Posts{" "}
        {this.state.posts.length
          ? this.state.posts.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))
          : null}
        {this.state.errorMsg ? <div>{this.state.errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
