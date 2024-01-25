const formatter = new Intl.DateTimeFormat("en-US", {
  year: 'numeric',
  month: "short",
  day: 'numeric',
});
export const DateFormate = (date: string) => {
  return formatter.format(new Date(date))
};
// export const checkIfDateIsPast = (dateString: string) => {
//   const date = new Date(dateString);
//   const formattedDate = formatter.format(date);

//   // Create a new date object for comparison (set to start of the day for accurate comparison)
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   // Set the hours, minutes, seconds, and milliseconds to 0 for accurate date comparison
//   date.setHours(0, 0, 0, 0);

//   // Check if the date is in the past
//   const isPast = date < today;
//   if(date < today){
//     return true
//   }else{
//     return false
//   }
//   return {
//       formattedDate,
//       isPast
//   };
// };
