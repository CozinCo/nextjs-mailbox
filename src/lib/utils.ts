import { type ClassValue, clsx } from "clsx"
import moment from "moment";
import { twMerge } from "tailwind-merge"
moment.updateLocale('en', {
 
  // Specify the callback function for
  // customizing the values
  meridiem: function (hour, minute, isLowercase) {
      if (hour >= 12)
          return isLowercase ? 'pm' : 'PM';
      else
          return isLowercase ? 'am' : 'AM';
  }
});
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function dateToFromNowDaily( myDate:Date ) {

  // get from-now for this date
  let fromNow = moment( myDate ).format( 'MMM D, hh:mm A' );

  // ensure the date is displayed with today and yesterday
  return moment( myDate ).calendar( null, {
      // when the date is closer, specify custom values
      lastWeek: 'MMM D, hh:mm A',
      lastDay:  '[Yesterday]',
      sameDay:  '[Today]',
      
      // when the date is further away, use from-now functionality             
      sameElse: function () {
          return "[" + fromNow + "]";
      }
  });
}
export const MailBoxIcons =  {
  "inbox": "📥",
  "junk": "📥",
  "sent": "📥",
  "drafts": "📥",
  "deleted": "📥",
  "trash": "📥",
   
}
export const GetLogo = () => {
  // "use client"
  // const theme = window.localStorage.getItem("theme")
  // const logo = theme === "light" ? "/logo2-light.jpg" : "/logo2-dark.png" 
  return  "/logo2-dark.png"
}
export const GetTime = (Date:string)=>{
switch (Date) {
  case "value":
    
    break;

  default:
    break;
}
}