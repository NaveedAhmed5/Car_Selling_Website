interface alertSpecifications {
  onClose: () => void;
}

const Alert = ({ onClose }: alertSpecifications) => {
  return (
    <div className="alert alert-primary alert-dismissable" role="alert">
      A simple primary alert—check it out!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
