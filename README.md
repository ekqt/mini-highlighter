This is a sample project that uses `shiki` for syntax highlighting:

```ts
import { getHighlighter } from "shiki";

export async function highlight(code: string) {
  /* ⬇️ Create a highlighter instance with a theme */
  const highlighter = await getHighlighter({ theme: "dark-plus" });
  /* ⬇️ Highlight your code using the right syntax*/
  return highlighter.codeToHtml(code, { lang: "ts" });
}
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ekqt/mini-highlighter?file=lib/shiki.ts&title=Mini%Highlighter)
