import { Field } from "../store";
import winningLines from "./winningLines";

export const checkWinner: (fields: Array<Field>) => boolean = (fields) => {
  return winningLines.reduce((acc: boolean, l: Array<number>) => {
    if (
      !!fields[l[0]].value &&
      fields[l[0]].value === fields[l[1]].value &&
      fields[l[0]].value === fields[l[2]].value
    ) {
      return true;
    } else return acc;
  }, false);
};
