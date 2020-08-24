// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage

import React from "react";
import Layout from "../components/layout-new";

const Index = () => {
  return (
    <Layout>      
      <div>
        <h1>Home Page</h1>
        <h2>YOHOO!, I'm a Gatsby.js developer</h2>
      </div>
    </Layout>
  )
}

export default Index