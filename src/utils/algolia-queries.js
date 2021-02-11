const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `public`
const indexName = `Pages`

const pageQuery = `{
  pages: allGhostPost {
    edges {
      node {
        id
        title
        slug
        excerpt
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, ...rest } }) {
  return {
    objectID: id,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
