import { createEffect, restore, combine } from "effector";

import { getCases } from "../../api/getCases";
import { $filters } from "../filtersStore/filtersStore";

export const getCasesFx = createEffect(getCases);
export const $cases = restore(getCasesFx, []);

export const $filteredCases = combine(
  $cases, 
  $filters, 
  (cases, filters) => {
    if (!filters.length) return cases;

    return cases.filter(item => {
      return filters.some(filter => item?.Filters?.includes(filter));
    })
  }
)

