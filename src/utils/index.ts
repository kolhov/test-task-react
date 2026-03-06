export function timeToSeconds(time: string): number | undefined {
  const parts = time.split(":").map(Number);

  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else {
    return undefined;
  }
}

export function getMonthName(dateStr: string): string {
  const today = new Date();
  let compareDate = formatDate(today);
  if (compareDate === dateStr) return "Сегодня";
  today.setDate(today.getDate() - 1);
  compareDate = formatDate(today);
  if (compareDate === dateStr) return "Вчера";
  
  const [day, month, year] = dateStr.split(".");
  const date = new Date(+year, +month - 1, +day);

  return date.toLocaleString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
