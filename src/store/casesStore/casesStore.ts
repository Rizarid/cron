import { createEffect, restore } from "effector";
import { getCases } from "../../api/getCases";

export const getCasesFx = createEffect(getCases);
export const $cases = restore(getCasesFx, [])