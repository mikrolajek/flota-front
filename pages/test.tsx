import { useToken } from "../lib/Context";

export const Test = () => {
  const [{}] = useToken();

  return (
    <>
      {/* <h1>{locale}</h1> */}
      <h1>{restate.token}</h1>
    </>
  );
};

export default Test;
