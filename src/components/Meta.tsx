import React from "react";
import { Helmet } from "react-helmet";

interface IMetaProps {
  title?: String;
  description?: string;
  keywords?: string;
}

function Meta(props: IMetaProps) {
  const { title, description, keywords } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
