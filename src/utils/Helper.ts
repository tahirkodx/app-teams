const formatter = new Intl.DateTimeFormat("en-US", {
  year: 'numeric',
  month: "short",
  day: 'numeric',
  
});
export const DateFormate = (date: string) => {
  return formatter.format(new Date(date))
};
export const  MonthsAgo = (dateString: any) =>{
  const date = new Date(dateString);
  const currentDate = new Date();

  // Extract year and month
  const year1 = date.getFullYear();
  const month1 = date.getMonth();
  const year2 = currentDate.getFullYear();
  const month2 = currentDate.getMonth();

  // Calculate difference
  const months = (year2 - year1) * 12 + (month2 - month1);

  return Math.abs(months); // Returns the absolute value to avoid negative numbers
}
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
export const emailValidate = (email : string) =>{
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
}
export const convertSecondsIntoMints = (time : any) =>{
  const minutes = Math.floor(time / 60);
  // console.log(`${time} seconds is equivalent to ${minutes} minutes.`);
  return minutes;

}
export const mintsLeft = (totalTime : any ,watchTime : any) =>{
  const time = totalTime - convertSecondsIntoMints(watchTime)
  return  time
}
