import React, { Component } from 'react';

class MediumArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saintasia')
      .then(response => response.json())
      .then(data => this.setState({ items: data.items }));
  }
  render() {
    const { items } = this.state;
    const posts = items.filter(item => item.categories.length > 1);
    return (
      <>
        {posts.map(post =>
          <li key={post.pubDate}>
            <a className='text-link' target='_blank' rel='noopener noreferrer' href={post.link}>{post.title}</a>
          </li>
        )}
      </>
    );
  }
}

export default MediumArticles;
