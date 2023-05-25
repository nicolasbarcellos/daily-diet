import { format } from "date-fns";

export const formatHours = (date: Date) => {
  const dateFormatted = format(date, "h:mm a");
  return dateFormatted;
};
