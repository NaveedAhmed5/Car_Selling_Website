import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import EditText from "./components/EditText";

function App() {
  let cities = ["Islamabad", "Lahore", "Faisalabad"];

  let fruits: string[] = ["Mango", "Apple", "Banana"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [showList, setShowList] = useState(false);

  const onClickButton = () => {
    showList ? setShowList(false) : setShowList(true);
  };

  return (
    <div>
      <Button
        children="View List"
        onButtonClick={onClickButton}
        variantButton="danger"
      />
      {showList && (
        <ListGroup
          items={fruits}
          heading="Fruits"
          onSelectItem={handleSelectItem}
        />
      )}
      <EditText/>
    </div>
  );
}

export default App;
