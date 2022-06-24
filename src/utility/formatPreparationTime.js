export default function formatPreparationTime(durationInMinutes) {
  // example input: 175
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = Math.floor(durationInMinutes % 60);

  const hoursFormatted = hours.toString(10).padStart(2, '0');
  const minutesFormatted = minutes.toString(10).padStart(2, '0');

  // example output: 02:55:00
  return `${hoursFormatted}:${minutesFormatted}:00`;
}
