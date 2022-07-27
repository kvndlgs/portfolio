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
              projectName
            }
          }
        }
      }
      `).then((result) => {
        if(result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProject.edges.forEach((project) => {
          createPage({
            path: `/projects/${project.node.projectName}`,
            component: projectTemplate,
            context: {
              name: project.node.projectName,
            }
          })
        })
        return
      })
    )
  })
}