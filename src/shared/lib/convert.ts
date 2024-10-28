import { ISODateString } from "../model";

export const isISODateString = (date: string): date is ISODateString => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  return isoDateRegex.test(date);
}