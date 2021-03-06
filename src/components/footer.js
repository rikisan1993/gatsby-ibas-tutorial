import React from "react";
import footerStyles from "./footer.module.scss";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `
    )
    return (
        <footer className={footerStyles.siteFooter}>
            <p className={footerStyles.container}>
                Site developed by {data.site.siteMetadata.author} &copy;{" "}{new Date().getFullYear().toString()}{" "}
            </p>
        </footer>
    )
}

export default Footer