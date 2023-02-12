export const handleFormatDate = (date: string | Date) => {
  const monthString = [
    "March",
    "April",
    "May",
    "June",
    "Jan",
    "Feb",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  return `${day} ${monthString[month - 1]} ${year}`;
};
