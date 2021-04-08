import Link from "next/link";
import React from "react";

export const WiecejLink = ({ cellInfo, linkPath }: any) => {
  return (
    <div>
      <Link
        href={`${linkPath}${cellInfo.cell.value}`}
        // as={`/lista/auto/${cellInfo.cell.value}`}
      >
        <a>Więcej {">"}</a>
      </Link>
    </div>
  );
};

// /lista/aotu;
