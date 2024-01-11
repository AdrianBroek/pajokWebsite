import React, {useState,useRef, useEffect,useMemo } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { convertToCustomFormat } from './reusable/convertToRichTest';

import HtmlToJSON from './HTMLtoJSON';
import { htmlToJson } from './htmlJson'; 

export default function TextEditor({initialValue, setText}) {
    const api_key = process.env.REACT_APP_TEXT_EDITOR_TOKEN;
    const editorRef = useRef(null);
    const [dirty, setDirty] = useState(false);
    useEffect(() => setDirty(false), [initialValue]);
    const save = () => {
      if (editorRef.current) {
        const content = editorRef.current.getContent();
        setDirty(false);
        editorRef.current.setDirty(false);
        // an application would save the editor content to the server here
        // console.log(content);
      }
    };

    

    // const cos = useMemo(() => {
    //   if (editorRef.current) {
    //     let value = editorRef.current?.getContent({ format: 'raw'});
        
    //     // const html = htmlToJson(value)
    //     // console.log(html)
    //     // setText(html[0])
    //     // .then((res)=> setText(res))
    //     // .then((res)=> console.log(res))
    //   }

    // }, [save]);

    // console.log(HtmlToJSON('<p>Halo, <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_311075044141704922283395" aria-invalid="spelling" data-mce-highlight-id="mce-cram_311075044141704922283395" data-mce-bogus="1" data-mce-annotation="dlaczego" data-mce-lingo="en_us">dlaczego</span> to <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_769889308191704922284105" aria-invalid="spelling" data-mce-highlight-id="mce-cram_769889308191704922284105" data-mce-bogus="1" data-mce-annotation="nie" data-mce-lingo="en_us">nie</span> <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_121595698221704922284744" aria-invalid="spelling" data-mce-highlight-id="mce-cram_121595698221704922284744" data-mce-bogus="1" data-mce-annotation="działa" data-mce-lingo="en_us">działa</span> ...</p><p><span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_941371136281704922293098" aria-invalid="spelling" data-mce-highlight-id="mce-cram_941371136281704922293098" data-mce-bogus="1" data-mce-annotation="Cchciałbym" data-mce-lingo="en_us">Cchciałbym</span> <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_455529022361704922295180" aria-invalid="spelling" data-mce-highlight-id="mce-cram_455529022361704922295180" data-mce-bogus="1" data-mce-annotation="złożyć" data-mce-lingo="en_us">złożyć</span> <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_41297691711704922416021" aria-invalid="spelling" data-mce-highlight-id="mce-cram_41297691711704922416021" data-mce-bogus="1" data-mce-annotation="zażaleni" data-mce-lingo="en_us">zażaleni</span></p><h1><span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_951991064501704922410453" aria-invalid="spelling" data-mce-highlight-id="mce-cram_951991064501704922410453" data-mce-bogus="1" data-mce-annotation="Jezusku" data-mce-lingo="en_us">Jezusku</span>!</h1><hr><p><span style="background-color: rgb(52, 73, 94);" data-mce-style="background-color: rgb(52, 73, 94);"><strong>to ma <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_859766992821704922416832" aria-invalid="spelling" data-mce-highlight-id="mce-cram_859766992821704922416832" data-mce-bogus="1" data-mce-annotation="być" data-mce-lingo="en_us">być</span> COOL?!</strong></span></p><p><span style="background-color: rgb(52, 73, 94);" data-mce-style="background-color: rgb(52, 73, 94);"><strong>🙀</strong></span></p>'))

    // htmlToJson('<p><span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_3665664431704925681583" aria-invalid="spelling" data-mce-highlight-id="mce-cram_3665664431704925681583" data-mce-bogus="1" data-mce-annotation="asdasd" data-mce-lingo="en_us">asdasd</span></p><p><span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_978181845151704925683412" aria-invalid="spelling" data-mce-highlight-id="mce-cram_978181845151704925683412" data-mce-bogus="1" data-mce-annotation="asasd" data-mce-lingo="en_us">asasd</span></p><p>dasasdasd</p><p>dasd</p><p>asdasdasdasd</p>')

    return (
      <>
      <Editor
        apiKey={api_key}
        init={{
          plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
        }}
        initialValue={initialValue}
        onInit={(evt, editor) => editorRef.current = editor}
        onDirty={() => setDirty(true)}
      />
      <button onClick={save} disabled={!dirty}>Save</button>
      {dirty && <p>You have unsaved content!</p>}
      </>
    );
}