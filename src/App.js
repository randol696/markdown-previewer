
import React from 'react';
import { marked } from 'marked';

 
function App() {
  const [input, setInput] = React.useState("# H1\n" + "## H2\n" + "\`printf('goodbye world!')\`\n"+ "\`\`\` \n printf('goodbye world!') \n \`\`\` \n"+ "[title](https://www.example.com) \n" + "1. First item 2. Second item 3. Third item \n "+" 'span' \n " + " 	> blockquote  \n"+"![alt text](https://www.w3schools.com/images/lamp.jpg)  "+ " **bold text**  ");
  let handleInput=(event)=>{
    setInput(event.target.value)
  }  
  let getMarkdownText=()=> {
    var rawMarkup = marked(input);
    console.log({rawMarkup})
    return { __html: rawMarkup };
  }
  marked.setOptions({
    sanitize: false,
    breaks: true,
  });
  
  return (
    <>
     <h1 className='title'>Markdown preview</h1>
    <div className="main-container">
     
        <div className="editor-container">
          <div className='editor-bar'><spam>Editor</spam></div>
          <textarea name="" id="editor" cols="30" rows="10" onChange={handleInput}>{input}</textarea>
        </div>

        <div className="render-container">
          <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
     
    </div>
      </>
  );
}

export default App; 