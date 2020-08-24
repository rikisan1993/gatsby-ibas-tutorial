/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")
        actions.createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }      
    `)
    response.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: path.resolve("./src/templates/blog-post.js"),
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}