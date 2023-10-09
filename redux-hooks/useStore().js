import { useStore } from "react-redux";

function PrintStore(props) {
  const store = useStore();

  return <div>{store.getStat()}</div>;
}

export default PrintStore;
