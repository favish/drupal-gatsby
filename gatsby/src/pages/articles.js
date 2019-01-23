import React from "react"
import { graphql } from "gatsby"
import moment from "moment";

import Img from "../components/img";
import Layout from '../components/layout'

const ArticleList = ({ data }) => (
  <Layout>
    <h1>List of articles</h1>
    { data.allNodeArticle.edges.map(({ node }) => {
      return (
        <div>
          <h3>{ node.title }</h3>
          <div>Created <b>{ moment(node.created).fromNow() }</b></div>
          <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
          {
            node.relationships.field_image.localFile.childImageSharp
              ? <Img fluid={node.relationships.field_image.localFile.childImageSharp.fluid} />
              : null
          }
        </div>
      )
    })}
  </Layout>
);

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
                  relationships {
                    field_image {
                        localFile {
                            childImageSharp {
                                fluid(
                                    maxWidth: 1060,
                                    quality: 100,
                                ) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                    presentationWidth
                                }
                            }
                        }
                      
                    }
                  }
              }
          }
      }
  }
`;

export default ArticleList