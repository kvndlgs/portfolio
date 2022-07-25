exports.createPages = async ({actions}) => {
    const { createPage } = actions
    createPage({
        path: "/project",
        component: require.resolve("./src/templates/project.js"),
        context: {},
        defer: true,
    })
}