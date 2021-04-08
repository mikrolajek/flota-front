import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { TableMerchandiser } from "@COMPONENTS/Tables/rekrutacje/merchandiser/TableMerchandiser";

export const Merchandiser = () => {
  return (
    <LayoutM flexCenter={true} selectedField={"6"}>
      <TableMerchandiser />
    </LayoutM>
  );
};
// };

export default Merchandiser;
