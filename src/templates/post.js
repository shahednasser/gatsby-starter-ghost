import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    
    useEffect(() => {
        const disqus_config = function () {
            this.page.url = window.location.href;  
            this.page.identifier = "ghost-" + post.id
        };
        const d = document,
              s = d.createElement('script'),
              ts = d.createElement('script');
        
        s.src = 'https://shaheds-blog.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        
        ts.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=5fa59a268fbbd6001256e36a&product=inline-share-buttons';
        ts.setAttribute('async', 'async');
        (d.head || d.body).appendChild(ts);
        
        return () => {
            document.body.removeChild(s);
            document.body.removeChild(ts);
        }
    }, []);

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        { post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={ post.feature_image } alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>

                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                        <div id="mlb2-3059009" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3059009">
                          <div className="ml-form-align-center">
                            <div className="ml-form-embedWrapper embedForm">
                              <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                                <div className="ml-form-embedContent" style="">
                                  <h4>Subscribe to Newsletter</h4>
                                  <p>Subscribe to the newsletter to be notified of new tutorials and articles!</p>
                                </div>
                                <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/t8p8l2" data-code="t8p8l2" method="post" target="_blank">
                                  <div className="ml-form-formContent horozintalForm">
                                    <div className="ml-form-horizontalRow">
                                      <div className="ml-input-horizontal">
                                        <div style="width:100%" className="horizontal-fields">
                                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                            <input type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email">
                                          </div>
                                        </div>
                                      </div>
                                      <div className="ml-button-horizontal primary">
                                        <button type="submit" className="primary">Subscribe</button>
                                        <button disabled="disabled" style="display:none" type="button" className="loading"> <div className="ml-form-embedSubmitLoad"><div></div><div></div><div></div><div></div></div> </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ml-form-embedPermissions" style="">
                                    <div className="ml-form-embedPermissionsContent horizontal privacy-policy">
                                      <p>You can unsubscribe anytime.</p>
                                    </div>
                                  </div>
                                  <input type="hidden" name="ml-submit" value="1">
                                  <div className="ml-mobileButton-horizontal">
                                    <button type="submit" className="primary">Subscribe</button>
                                    <button disabled="disabled" style="display:none" type="button" class="loading"> <div className="ml-form-embedSubmitLoad"><div></div><div></div><div></div><div></div></div> </button>
                                  </div>
                                </form>
                              </div>
                              <div className="ml-form-successBody row-success" style="display:none">
                                <div className="ml-form-successContent">
                                  <h4>Thank you!</h4>
                                  <p>You have successfully joined our subscriber list.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sharethis-inline-share-buttons"></div>
                        <div id="disqus_thread"></div>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
