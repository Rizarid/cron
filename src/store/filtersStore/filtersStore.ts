import { createEvent, createStore } from "effector";
import { Filters } from "./interfaces";

export const addFilterEvent = createEvent<Filters>();
export const deleteFilterEvent = createEvent<Filters>();
export const switchFilterEvent = createEvent<Filters>();

const addFilter = (state: Filters[], filter: Filters) => {
  return [ ...state, filter];
}

const deleteFilter = (state: Filters[], filter: Filters) => {
  return state.filter(item => item !== filter );
}

const switchFilter = (state: Filters[], filter: Filters) => {
  if (state.includes(filter)) return deleteFilter(state, filter)
  return addFilter(state, filter)
}

export const $filters = createStore<Filters[]>([])
  .on(addFilterEvent, addFilter)
  .on(deleteFilterEvent, deleteFilter)
  .on(switchFilterEvent, switchFilter)



export const switchFiltersEvent = createEvent();

const switchFilters = (state: boolean) => {
  return !state
}

export const $filtersIsOpen = createStore<boolean>(true)
  .on(switchFiltersEvent, switchFilters)