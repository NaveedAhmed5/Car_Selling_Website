import { useState } from "react";
import Button from "./Button";

interface ItemsList {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ItemsList) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group-horizontal">
        {items.map((item, index) => (
          <Button
            children={item}
            variantButton="danger"
            key={index}
            onButtonClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          ></Button>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
