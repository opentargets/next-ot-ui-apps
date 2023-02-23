import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import BasePage from '../../components/BasePage';
import Header from './Header';

export default function DrugPage() {

  // TMP
  const name = 'METFORMIN';
  const chemblId = 'CHEMBL1431';
  const crossReferences = undefined;
  // const { name, crossReferences } = data?.drug || {};

  return (
    <div className={styles.container}>
      <Head>
        <title>Drug page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main> */}
        
        <BasePage
          title={`${name || chemblId} profile page`}
          description={`Annotation information for ${name || chemblId}`}
          location={location}
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


      {/* </main> */}

      <footer>
        <p>hello footer</p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
