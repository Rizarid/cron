import { createEffect, createEvent, restore } from "effector";
import { getCases } from "../../api/getCases";

export const getCasesFx = createEffect(getCases);
export const $cases = restore(getCasesFx, []);

export const addFilterEvent = createEvent<string>();
export const deleteFilterEvent = createEvent<string>();

