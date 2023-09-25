const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions;

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
              thumb
              featured
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
