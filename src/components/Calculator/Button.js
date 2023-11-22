import "bootstrap/dist/css/bootstrap.css";

export default function Button({ value, onClick }) {
  const onClickWrapper = () => {
    onClick(value);
  };

  return (
    <button
      className="col btn btn-warning rounded-0 border border-dark"
      onClick={onClickWrapper}
    >
      {value}
    </button>
  );
}
