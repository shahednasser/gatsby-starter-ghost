import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet';
import { Layout } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>Not Found</title>
        </Helmet>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body">
                    The page you were looking for was not found.<Link to="/">Return home</Link> to find other interesting articles!
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
