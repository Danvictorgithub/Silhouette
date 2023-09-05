import { format } from "path";

function formatDateForFileName(date:Date):string {
    if (!(date instanceof Date)) {
      return "InvalidDate";
    }
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Create a string in the format YYYY-MM-DD_HH-MM-SS
    const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  
    // Replace any characters that are not allowed in file names with underscores
    return formattedDate.replace(/[\s\/:*?"<>|]/g, "_");
  }

  /**
   * Returns the current date in the format YYYY-MM-DD_HH-MM-SS
   */
export default formatDateForFileName;