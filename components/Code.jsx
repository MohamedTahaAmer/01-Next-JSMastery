'use client'

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-twilight.css';

function Code({lang, str}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre><code class={`language-${lang}`}>{str}</code></pre>
  )
}

export default Code