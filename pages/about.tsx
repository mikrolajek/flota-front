import Cookies from "js-cookie";
import Link from "next/link";
import Layout from "../components/Layout";
// import { useRouter } from "next/router";
import { useToken } from "../lib/Context";

const AboutPage = () => {
  // const router = useRouter();

  const [restate, dispatch] = useToken();

  // const handleLoginClick = () => {
  //   router.push("/login");
  // };

  // console.log("PRZED", Cookies.get("token"));
  return (
    <Layout title="testowa strona contextu">
      <h1>Lalala</h1>
      <p>This is the about page</p>
      <p>{restate.token}</p>
      <p>
        <Link href="/test">
          <a>Go test</a>
        </Link>
        {/* <a onClick={handleLoginClick}>Go to login page</a> */}
      </p>

      <button
        onClick={() => {
          console.log(restate.token, dispatch);
          dispatch({ type: "SET_TOKEN", payload: "lalallalla" });
        }}>
        TuMnieKliknij
      </button>
    </Layout>
  );
};

export default AboutPage;
