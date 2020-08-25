/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it


import React from 'react';
import { withPrefix } from "gatsby"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script defer src="https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js" />,
    <script defer src="https://www.gstatic.com/firebasejs/7.19.0/firebase-analytics.js"/>,
    <script defer src="https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js"/>,
    <script defer src={withPrefix('firebase-init.min.js')} type="text/javascript" />
  ])
}