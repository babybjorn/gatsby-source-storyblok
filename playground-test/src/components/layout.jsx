/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { apiPlugin, storyblokInit } from "@babybjorn/gatsby-source-storyblok"
import PropTypes from "prop-types"
import * as React from "react"
import configuration from '../../gatsby-config'
import Feature from './Feature'
import Grid from './Grid'
import Teaser from './Teaser'

const sbConfig = configuration.plugins.find((item) => item.resolve === '@babybjorn/gatsby-source-storyblok')

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
});

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout