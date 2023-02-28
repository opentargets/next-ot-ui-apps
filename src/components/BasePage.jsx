import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Footer, GlobalSearch } from 'ui';

import Page from './Page';
import NavBar from './NavBar';
import {
  appTitle,
  // appDescription,
  // appCanonicalUrl,
  // externalLinks,
  mainMenuItems,
} from '../constants';

const BasePage = ({ children }) => {
  // console.log(title);
  console.log('children ',children);
  // console.log(description);
  // console.log(location);
  // const composedTitle = `${title ? title + ' | ' : ''} ${appTitle}`;

  return (
    <Page
      header={
        <NavBar
          name="Platform"
          search={<></>} // search={<GlobalSearch />}
          items={mainMenuItems}
        />
      }
      footer={<></>/*<Footer externalLinks={externalLinks} />*/}
    >
      {/* <Helmet title={composedTitle}>
        <meta name="description" content={description || appDescription} />
        <link
          rel="canonical"
          href={appCanonicalUrl + (location?.pathname || '')}
        />
      </Helmet> */}
      {children}
    </Page>
  );
};

export default BasePage;
