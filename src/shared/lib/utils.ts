import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ISODateString, Timestamp } from "../model";
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isISODateString = (date: string): date is ISODateString => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  return isoDateRegex.test(date);
}

export const convertToTimestamp = (date: ISODateString): Timestamp => {
  return dayjs(date).valueOf();
}

export const formatDate = (timestamp: Timestamp, format='YYYY-MM-DD hh:mm:ss'): string => {
  return dayjs(timestamp).format(format);
}