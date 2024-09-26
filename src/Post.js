import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const Post = () => {
  const [code, setCode] = useState('// Write your code here');
  const [markdown, setMarkdown] = useState('# Write your post in markdown');

  return (
    <div>
      <h1>Post a Question</h1>
      <div>
        <h2>Code Editor</h2>
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
          editorDidMount={(editor) => {
            editor.setSize("100%", "auto"); // Ensure editor takes full width
          }}
          className="code-editor"
        />
      </div>
      <div>
        <h2>Markdown Editor</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div>
        <h2>Preview</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
