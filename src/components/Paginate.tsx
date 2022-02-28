import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface IPaginateProps {
  pages: Number;
  page: Number;
  isAdmin?: Boolean;
  keyword?: String;
}

function Paginate(props: IPaginateProps) {
  const { pages, page, keyword, isAdmin } = props;

  return (
    <Pagination>
      {[...Array(pages).keys()].map((x) => (
        <LinkContainer
          key={x + 1}
          to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
        >
          <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  );
}

Paginate.defaultProps = {
  isAdmin: false,
  keyword: "",
};

export default Paginate;
