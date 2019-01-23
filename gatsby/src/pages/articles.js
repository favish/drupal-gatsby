import React from "react"
import { graphql } from "gatsby"
import moment from "moment";

import Layout from '../components/layout'

const ArticleList = ({ data }) => (
  <Layout>
    <h1>List of articles</h1>
    { data.allNodeArticle.edges.map(({ node }) => (
      <div>
        <h3>{ node.title }</h3>
        <div>Created <b>{ moment(node.created).fromNow() }</b></div>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
      allNodeArticle(limit: 10) {
          edges {
              node {
                  id
                  title
                  created
                  body {
                      value
                      summary
                  }
              }
          }
      }
  }
`

export default ArticleList