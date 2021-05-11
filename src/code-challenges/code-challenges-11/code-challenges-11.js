export function returnTen(str){
  let array = [];
  if (str.length < 10) {
    for (let i = 0; i < str.length; i++){
      array.push(str[i]);
      
    }}
  if (str.length > 10){
    for (let i = 0; i < str.length; i++) {
      if (i === (str.length - 10)) {
        const string = str.slice((str.length - 10), str.length);
   
        for (let i = 0; i < string.length; i++){
          array.push(string[i]);
        }}
    }}
  return array;
    
  
}
  
