import React from "react";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export class FetchContent extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: null,
      items: [],
      query: this.props.query
    };
  }

  componentDidMount() {
    client
      .getEntries(this.state.query)
      .then(({ items }) =>
        this.setState({
          items
        })
      )
      .catch(error =>
        this.setState({
          error
        })
      );
  }

  render() {
    const { items, error } = this.state;
    return this.props.render({
      items,
      error
    });
  }
}
