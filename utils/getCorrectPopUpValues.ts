import { IOptionSelect } from "@UTILS/IOptionSelect";
import { matchSorter } from "match-sorter";

export const getCorrectPopUpValues = (
  options: IOptionSelect[],
  textInput: string,
  optionFromForm: any
): boolean => {
  let filteredValues = matchSorter(options, textInput, {
    keys: ["label"],
  }) as IOptionSelect[];

  let isOptionReturned = filteredValues.some(
    (item) => item?.label == optionFromForm.label
  );
  return isOptionReturned;
};

export default getCorrectPopUpValues;
