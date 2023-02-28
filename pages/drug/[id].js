import Head from "next/head";
import DrugPageQuery from "./DrugPage.gql";
import client from "../../client";
import DrugPage from "../../src/pages/DrugPage/DrugPage";

export default function DrugPageContainer({ data }) {
  const {
    drug: { name, id, description },
  } = data;

  return (
    <div>
      <Head>
        <title>Open Targets Platform</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      {/* drug page goes here */}
      <DrugPage 
        chemblId={id}
      />

    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;

  const data = await client.query({
    query: DrugPageQuery,
    variables: { chemblId: id },
  });

  // Pass data to the page via props
  return { props: { data: data.data } };
}
