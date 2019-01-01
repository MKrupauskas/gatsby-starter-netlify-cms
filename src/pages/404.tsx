import { Link } from 'gatsby'
import React from 'react'

import Layout from './../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Not Found</h1>
      <p>We are sorry you didn't find what you were looking for.</p>
      <Link to="/">Go back.</Link>
    </div>
  </Layout>
)

export default NotFoundPage
