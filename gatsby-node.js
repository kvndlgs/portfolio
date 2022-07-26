const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/project.js')
    resolve(
      graphql(`
      {
        allContentfulProject (limit: 100) {
          edges {
            node {
              id
              title
              type
              category
            }
          }
        }
      }
      `).then((result) => {
        if(result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage({
            path: edge.node.id,
            component: projectTemplate,
          })
        })
        return
      })
    )
  })
}