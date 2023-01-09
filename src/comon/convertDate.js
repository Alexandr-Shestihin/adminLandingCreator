export const convertDate = (date) => {
   const value = date.split('.');
   const result = [];
   result.push(value[1]);
   result.push(value[0]);
   result.push(value[2]);
   const newDate = result.join('.');
   return new Date(newDate).toISOString().split("T")[0];
}