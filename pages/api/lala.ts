import { NextApiRequest, NextApiResponse } from "next";

export const Lala = (req: NextApiRequest, res: NextApiResponse) => {
  const tree = {
    lenght: 10,
    color: "green",
  };
  res.json(tree);
};
