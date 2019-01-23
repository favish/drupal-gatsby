import React from "react"

import Layout from '../components/layout'

export const query = graphql`
  query allNodeArticle {
      allNodeArticle {
          edges {
              node {
                  id
                  title
                  body {
                      value
                      format
                      processed
                      summary
                  }
              }
          }
      }
  }
`

const ArticlesPage = ({ data }) => (
  <Layout>
    <h1>List of articles</h1>
    { data.allNodeArticle.edges.map(({ node }) => (
      <div>
        <h3>{ node.title }</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
      </div>
    ))}
  </Layout>
)

export default ArticlesPage