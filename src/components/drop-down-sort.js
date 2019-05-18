import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "shards-react";

const DropDownSort = props => {
  const [sort_by, setSort] = useState("created_at");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    props.handleSort(sort_by);
  }, [sort_by]);
  const sortText = {
    author: "Author",
    created_at: "Date created",
    votes: "Flex"
  };

  return (
    <Dropdown
      open={open}
      toggle={e => {
        setOpen(!open);
      }}
      group
    >
      <Button style={{ width: "150px" }}>{sortText[sort_by]}</Button>
      <DropdownToggle split />
      <DropdownMenu>
        <DropdownItem
          onClick={e => {
            setSort("created_at");
          }}
        >
          Creation date
        </DropdownItem>
        <DropdownItem
          onClick={e => {
            setSort("author");
          }}
        >
          Author
        </DropdownItem>
        <DropdownItem
          onClick={e => {
            setSort("votes");
          }}
        >
          Flex
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownSort;
