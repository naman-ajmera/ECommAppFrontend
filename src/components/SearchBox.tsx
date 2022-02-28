import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ display: "flex" }}>
      <Form.Control
        value={keyword}
        type="text"
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button type="submit" variant="outline-success" className="m-2 p-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
