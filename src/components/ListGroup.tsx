import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelection: (item: string) => void;
}

function ListGroup({ items, heading, onSelection }: Props) {
  //   const items = [];
  //   const items = ["New Delhi", "Mumbai", "Kolkata"];

  //   let selectedItem = 0;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const noItemMessage = items.length === 0 ? <p>No item found</p> : null;

  const getNoItemMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {noItemMessage}
      {getNoItemMessage()}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelection(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
