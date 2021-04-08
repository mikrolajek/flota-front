import { useRouter } from "next/router";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Id: {id}</p>;
};

export default Id;
