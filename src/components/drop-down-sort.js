import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "shards-react";

class DropDownSort extends React.Component {
  state = { open: false, sort_by: "created_at" };

  render() {
    return (
      <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button
          onClick={() => {
            this.props.handleSort(this.state.sort_by);
          }}
        >
          Sort
        </Button>
        <DropdownToggle split />
        <DropdownMenu>
          <DropdownItem
            onClick={e => {
              this.setState({ sort_by: "created_at" });
            }}
          >
            Creation date
          </DropdownItem>
          <DropdownItem
            onClick={e => {
              this.setState({ sort_by: "author" });
            }}
          >
            Author
          </DropdownItem>
          <DropdownItem
            onClick={e => {
              this.setState({ sort_by: "votes" });
            }}
          >
            Flex
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  toggle() {
    this.setState({ open: !this.state.open });
  }
}

export default DropDownSort;
