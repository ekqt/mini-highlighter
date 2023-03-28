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
