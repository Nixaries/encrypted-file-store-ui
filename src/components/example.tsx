import { createSignal } from "solid-js";
import Login from "./Uploader";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <Login />
      </div>
    </>
  )
}
