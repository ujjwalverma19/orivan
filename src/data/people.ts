/**
 * @deprecated Import from `@/content/registry` and `@/content/schemas` instead.
 * This module is a thin compatibility shim and will be removed once all
 * call sites migrate.
 */
export type {
  Person,
  TimelineEntry,
  Skill,
  Failure,
  Book,
  Influence,
  Decision,
  Insight,
  Quote,
  PersonInput,
} from "@/content/schemas";

import { getAllPeople, getPersonBySlug } from "@/content/registry";

/** @deprecated use `getPersonBySlug` from `@/content/registry`. */
export const getPerson = getPersonBySlug;

/** @deprecated use `getAllPeople()` from `@/content/registry`. */
export const people = getAllPeople();
