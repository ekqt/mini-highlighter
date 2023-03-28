import { getHighlighter, Lang, Theme } from "shiki";

type options = { lang: Lang; theme: Theme };

export async function highlight(code: string, { lang, theme }: options) {
  /* ⬇️ Create a highlighter instance with a theme */
  const highlighter = await getHighlighter({ theme });
  /* ⬇️ Highlight your code using the right syntax*/
  return highlighter.codeToHtml(code, { lang });
}
