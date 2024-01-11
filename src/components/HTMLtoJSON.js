// Imports
import { HTMLToJSON } from 'html-to-json-parser'; // ES6

export default async function HtmlToJSON(element){
    // console.log(element);
    let result = await HTMLToJSON(element, true);
    // console.log(result);
    return result;
}


  