import React from "react";
import Layout from "../components/layout-new";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import postStyles from "./blog-post.module.scss";

import SEO from "../components/seo"

export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date(formatString: "DD MM YYYY")
        title
        featured {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
      timeToRead
      html
    }
  }
`

const BlogPost = props => {
    return (
        <Layout>
            
            <SEO title={props.data.markdownRemark.frontmatter.title} />   
            <div className={postStyles.content}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <span className={postStyles.meta}>
                    Posted on {props.data.markdownRemark.frontmatter.date}{" "}
                    <span> / </span> {props.data.markdownRemark.timeToRead} min read
                </span>

                
                {
                    props.data.markdownRemark.frontmatter.featured && (
                        <Img 
                            className={postStyles.featured}
                            fluid={props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid} 
                            alt={props.data.markdownRemark.frontmatter.title} 
                        />
                    )
                }

                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            </div>
        </Layout>
    )
}

export default BlogPost;