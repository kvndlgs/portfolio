const path = require('path');

exports.createPages = async ({graphql, actions, reporter}) => {
    const  { createPage } = actions;

    const result = await graphql(`
     query AllProjects {
          {
            allProjectJson {
                edges {
                    node {
                        name
                        title
                        type
                        url
                        thumbnail
                    }
                }
              }
            }
          }
        `
    )

    if (result.errors) {
        reporter.panicOnBuilding(`Error while running Graphql query`)
        return
    }

    const projectTemplate = path.resolve(`src/templates/project-template.js`)
    result.data.allProjectJson.edges.forEach(node => {
        createPage({
            path: `/${node.name}`,
            component: projectTemplate,
            context: {
                project: node,
            },
        })
    })
}