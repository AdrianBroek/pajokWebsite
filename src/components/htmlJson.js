export function htmlToJson(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const result = [];
  
    function parseNode(node) {
      const element = {
        type: node.nodeName.toLowerCase(),
      };

      if (node.nodeType === Node.TEXT_NODE) {
        element.text = node.nodeValue.trim();
      }
  
      if (node.nodeType === Node.ELEMENT_NODE) {
        element.children = Array.from(node.childNodes).map(parseNode);
  
        if (node.attributes.length > 0) {
          element.attributes = {};
          Array.from(node.attributes).forEach(attr => {
            element.attributes[attr.name] = attr.value;
          });
        }
      }
  
      return element;
    }
  
    result.push(parseNode(doc.body));
    // console.log(result)
    return result;
  }
  
//   const htmlString = '<p>Halo, <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_311075044141704922283395" aria-invalid="spelling" data-mce-highlight-id="mce-cram_311075044141704922283395" data-mce-bogus="1" data-mce-annotation="dlaczego" data-mce-lingo="en_us">dlaczego</span> ... </p>';
//   const jsonResult = htmlToJson(htmlString);
  
//   console.log(JSON.stringify(jsonResult, null, 2));
//   console.log('halo??')