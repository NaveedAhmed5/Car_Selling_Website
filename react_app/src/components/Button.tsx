import { useState } from "react";
import Alert from "./Alert";

interface buttonSpecifications {
  children: React.ReactNode;
  variantButton?: string;
  onButtonClick: () => void;
  className?: string;
}

const classNameFunc = (variant: string) => {
  return `btn btn-outline-${variant} m-3`;
};

const Button = ({
  children,
  variantButton = "primary",
  onButtonClick,
}: buttonSpecifications) => {
  const [alertButton, setAlertButton] = useState(false);

  const onClose = () => {
    setAlertButton(false);
  };

  return (
    <>
      {alertButton && <Alert onClose={onClose}></Alert>}
      <button
        type="button"
        className={classNameFunc(variantButton)}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
