import { useSelector, useDispatch } from "react-redux";
import increment from "./actions/counter";
import "./index.css";
const Home = () => {
  const { Counter1 } = useSelector((state) => state.Counter1);
  const { Counter2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Main Home Page</h1>
      <div className="main-page">
        <h3>Passing counter to micro-app-1 Counter : {Counter1}</h3>
        <button onClick={() => dispatch(increment())} className="btn">
          Increment micro-app-1 counter
        </button>

        <h3>micro-app-2 Counter {Counter2}</h3>
      </div>
    </div>
  );
};

// export default Home;

export default Home;
