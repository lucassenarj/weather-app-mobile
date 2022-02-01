import getFullDay from "../utils/getFullDay";
import getFullMonth from "../utils/getFullMonth";

function useFormattedDate(value: string) {
  const date = new Date(value);
  const fullDay = getFullDay(date.getDay());
  const day = date.getDate();
  const month = getFullMonth(date.getMonth());
  return {
    fullDay,
    day,
    month,
    formatted: `${month}, ${day}`,
  }
}

export default useFormattedDate;