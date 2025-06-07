import type { GetStaticProps, NextPage } from "next";

import Layout from "../components/Layout";
import { siteConfig } from "../site.config";
import Card from "../components/Card";
import { fetchPages } from "../utils/notion";
import { IndexProps } from "../types/types";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages();
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};
 
const Home: NextPage<IndexProps> = ({ pages }) => {
  
  return <Layout>
    <div className="w-full md:w-auto pt-12">
      <h1 className="text-[2.625rem] md:text-5xl text-center md:text-left mb-8">
        {siteConfig.title}
      </h1>
      <div className="grid gap-4 md:gap-6 mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full my-12">
        {/* Card */}
        {pages.map((page, index) => (
          <Card key={index} page={page} />
        ))}
      </div>
    </div>
  </Layout>;
};
 
export default Home;