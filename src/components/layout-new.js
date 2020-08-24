import React from "react";
import Header from "./header-new";
import Footer from "./footer";
import "../styles/style.scss"
import layoutStyles from "./layout-new.module.scss";

const Layout = props => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <div className={layoutStyles.mainContent}>{props.children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;