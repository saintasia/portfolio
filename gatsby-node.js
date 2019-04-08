const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/portfolio-work.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              role
              del1
              del2
              del3
              image
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.erros)
    }
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage ({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
