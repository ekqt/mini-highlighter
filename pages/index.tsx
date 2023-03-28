import fs from "fs";
import { highlight } from "@/lib/shiki";
import { InferGetStaticPropsType } from "next";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: props.htmlDark }} />
      <div dangerouslySetInnerHTML={{ __html: props.htmlLight }} />
    </main>
  );
}

export async function getStaticProps() {
  const codeDark = fs.readFileSync("lib/shiki.ts", "utf8");
  const codeLight = fs.readFileSync("lib/example.tsx", "utf8");
  const htmlDark = await highlight(codeDark, {
    lang: "ts",
    theme: "github-dark",
    showLineNumbers: true,
    add: ["18-31"],
    remove: ["33-45"],
  });
  const htmlLight = await highlight(codeLight, {
    lang: "ts",
    theme: "github-light",
    showLineNumbers: true,
    add: ["1-2", "10"],
    remove: ["4-6"],
  });

  return {
    props: {
      htmlDark,
      htmlLight,
    },
  };
}
