export function convertToCustomFormat(element) {
    // console.log('dziala TO HALO')
    // console.log(element)
    // if (!element) {
    //   return null;
    // }
  
    const convertedElement = {
      type: element.type,
      children: [],
    };
  
    if (element.content && Array.isArray(element.content)) {
      for (const child of element.content) {
        if (typeof child === 'string') {
          // Jeśli child jest tekstem, dodaj jako element do children
          convertedElement.children.push({ type: 'text', text: child });
        } else {
          // Jeśli child jest innym elementem, rekurencyjnie przetwórz
          const convertedChild = convertToCustomFormat(child);
          if (convertedChild) {
            convertedElement.children.push(convertedChild);
          }
        }
      }
    }

    return convertedElement;
  }
  
// Przykład użycia
  // const convertedOutput = convertToCustomFormat(inputJSON);
  // console.log(convertedOutput);
  