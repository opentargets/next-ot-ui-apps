import React, { lazy } from 'react';
import { useQuery } from '@apollo/client';

import BasePage from '../../components/BasePage';
// import ScrollToTop from '../../components/ScrollToTop';
import Header from './Header';
import NotFoundPage from '../NotFoundPage';
import { RoutingTab, RoutingTabs } from '../../components/RoutingTabs';
import DRUG_PAGE_QUERY from './DrugPage.gql';

// const Profile = lazy(() => import('../DrugPage/Profile'));

// Props
// now only need chemblId:
// match was only used get ID and
// location was only passed to BasePage to get pathname
function DrugPage({ chemblId }) {
  
  const { loading, data } = useQuery(DRUG_PAGE_QUERY, {
    variables: { chemblId },
  });

  if (data && !data.drug) {
    return <NotFoundPage />;
  }

  const { name, crossReferences } = data?.drug || {};

  console.log('data: ',data);
  console.log(name, );
  console.log('ref ', crossReferences);

  return (
        
        <BasePage
          title={`${name || chemblId} profile page`}
          description={`Annotation information for ${name || chemblId}`}
        >
          <Header
            loading={loading}
            chemblId={chemblId}
            name={name}
            crossReferences={crossReferences}
          />
          {/* <ScrollToTop /> */}

          {/* <RoutingTabs>
            <RoutingTab
              label="Profile"
              path="/drug/:chemblId"
              component={() => <Profile chemblId={chemblId} name={name} />}
            />
          </RoutingTabs> */}
        </BasePage>

  )
}

export default DrugPage;
