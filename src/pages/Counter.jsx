import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);
  return (
    <div className="vh-100 w-full d-flex justify-content-center align-items-center">
      <div className="d-flex gap-4 align-items-center">
        <button onClick={() => dispatch(decrease())}>Azalt</button>
        <span className="fs-1">{count}</span>
        <button onClick={() => dispatch(increase())}>Arttir</button>
        <button onClick={() => dispatch(setCount(0))}>Sifirla</button>
      </div>
    </div>
  );
};

export default Counter;
