import { type ClassValue, clsx } from "clsx"
import moment from "moment";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function dateToFromNowDaily( myDate:Date ) {

  // get from-now for this date
  let fromNow = moment( myDate ).fromNow();

  // ensure the date is displayed with today and yesterday
  return moment( myDate ).calendar( null, {
      // when the date is closer, specify custom values
      lastWeek: '[Last] dddd',
      lastDay:  '[Yesterday]',
      sameDay:  '[Today]',
      nextDay:  '[Tomorrow]',
      nextWeek: 'dddd',
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