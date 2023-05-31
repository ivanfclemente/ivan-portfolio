import { marked } from "marked";
import React, { useState } from "react";
import classes from "./MarkdownPreviewer.module.css";

marked.setOptions({
  breaks: true,
  mangle: false,
  headerIds: false,
});

const renderer = new marked.Renderer();

const MarkdownPreviewer = () => {
  const initialState =
    "# h1\n\n## h2\n\n### h3\n\n\n*italic*, **bold**,`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * item 1\n  * item 2\n  * item 3\n\nNumbered list:\n\n  1. item 1\n  2. item 2\n  3. item 3\n\n> Blockquote\n\n`<div></div>`\n\n```\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n---\n\n#### Created by: [Ivan](mailto:ivanfclemente@gmail.com)";

  const [text, setText] = useState(initialState);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <h1>My Markdown Previewer</h1>
      </div>
      <div className={`${classes.editorContainer} ${classes.container}`}>
        <div className={`${classes.titlebar}`}>Editor</div>
        <textarea
          name="editor"
          className={classes.editor}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className={`${classes.container} ${classes.previewContainer}`}>
        <div className={`${classes.titlebar}`}>Previewer</div>
        <div>
          <Preview markdown={text} />
        </div>
      </div>
    </div>
  );
};

const Preview = ({ markdown }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      className={classes.preview}
    ></div>
  );
};

export default MarkdownPreviewer;
