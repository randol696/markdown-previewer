import React, { useState, useEffect } from 'react';
import * as marked from 'marked';

marked.setOptions({
  sanitize: false,
});

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[Link to Google](https://www.google.com/)
\`Inline Code\`

\`\`\`
// Code block
function greet() {
  return 'Hello!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)
**Bolded Text**`);

  useEffect(() => {
    marked(markdown);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
    <div>
      <h1>markdown</h1>
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
    </div>
    </>
  );
};

export default App;