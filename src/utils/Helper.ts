const formatter = new Intl.DateTimeFormat("en-US", {
  year: 'numeric',
  month: "short",
  day: 'numeric',
  
});
export const DateFormate = (date: string) => {
  return formatter.format(new Date(date))
};
export const checkIfDateIsPast = (dateString: string) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: 'numeric',
    month: "short",
    day: 'numeric',
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const date = new Date(dateString);
  
  // Create a new date object for comparison (set to start of the day for accurate comparison)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Set the hours, minutes, seconds, and milliseconds to 0 for accurate date comparison
  date.setHours(0, 0, 0, 0);

  // Check if the date is in the past
  const isPast = date < today;
  console.log(isPast)
  if(date < today){
    return true
  }else{
    return false
  }
  
};
