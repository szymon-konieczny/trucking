import * as React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Slider from '../components/Slider';
import QuickMenu from '../components/QuickMenu';
import Offer from '../components/Offer';
import './index.css';

const Layout = ({ data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Trucking' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="page">
      <div className="top" />
      <Header />
      <Slider />
      <QuickMenu />
      <Offer />
    
    </div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
