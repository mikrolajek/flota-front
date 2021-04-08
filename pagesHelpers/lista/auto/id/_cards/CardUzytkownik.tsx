import {
  CardExtented,
  CardItem,
} from "@COMPONENTS/universal-components/CardExtended";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { useGetCurrentUzytkownikForAutoQuery } from "generated/graphql";
import React, { FC } from "react";

interface IProps {
  idAuto: number;
}

const CardUzytkownik: FC<IProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetCurrentUzytkownikForAutoQuery({
    variables: { id_auto: idAuto },
  });

  if (loading) {
    <LoaderNoDash />;
  }

  const uzytkownik = data?.Historia_Uzytkownik_Auto[0]?.Uzytkownik;

  return (
    <CardExtented
      isDataChecker={uzytkownik?.id || undefined ? true : false}
      cardProps={{
        title: "Użytkownik",
      }}>
      <CardItem label={"Id"} content={uzytkownik?.id} />
      <CardItem label={"Imię"} content={uzytkownik?.imie} />
      <CardItem label={"Nazwisko"} content={uzytkownik?.nazwisko} />
    </CardExtented>
  );
};

export default CardUzytkownik;
