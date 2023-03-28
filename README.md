This is a sample project that uses `shiki` for syntax highlighting:

```ts
import { getHighlighter, Lang, Theme } from "shiki";

type options = { lang: Lang; theme: Theme };

export async function highlight(code: string, { lang, theme }: options) {
  /* ⬇️ Create a highlighter instance with a theme */
  const highlighter = await getHighlighter({ theme });
  /* ⬇️ Highlight your code using the right syntax*/
  return highlighter.codeToHtml(code, { lang });
}
```

```tsx
import fs from "fs";
import { highlight } from "@/lib/shiki";

export default function Example(props: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
}

export async function getStaticProps() {
  /* ⬇️ Read a file or import code from an external CMS */
  const code = fs.readFileSync("lib/shiki.ts", "utf8");
  /* ⬇️ Use Shiki to highlight your code */
  const html = await highlight(code, {
    lang: "ts",
    theme: "github-dark",
  });

  return { props: { html } };
}
```

## Using the `/app` directory

```tsx
import { highlight } from "@/lib/shiki";

export default async function Home() {
  const html = await highlight('console.log("Hello World")', {
    lang: "ts",
    theme: "github-dark",
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ekqt/mini-highlighter?file=pages/index.tsx)
