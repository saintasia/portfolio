import * as React from 'react'
import { useState, useEffect} from 'react'

const MediumArticles = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saintasia')
      .then(response => response.json())
      .then(data => setItems(data.items))
  }, [])
  const posts = items.filter(item => item.categories.length > 1);
  return (
    <>
      {posts.map(post =>
        <li key={post.pubDate}>
          <a className='text-link' target='_blank' rel='noopener noreferrer' href={post.link}>{post.title}</a>
        </li>
      )}
    </>
  )
}

export default MediumArticles;
