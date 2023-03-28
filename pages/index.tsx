import fs from "fs";
import { highlight } from "@/lib/shiki";
import { InferGetStaticPropsType } from "next";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.htmlDark }} />
      <div dangerouslySetInnerHTML={{ __html: props.htmlLight }} />
    </>
  );
}

export async function getStaticProps() {
  const codeDark = fs.readFileSync("lib/shiki.ts", "utf8");
  const codeLight = fs.readFileSync("lib/example.tsx", "utf8");
  const htmlDark = await highlight(codeDark, {
    lang: "ts",
    theme: "github-dark",
  });
  const htmlLight = await highlight(codeLight, {
    lang: "ts",
    theme: "github-light",
  });

  return {
    props: {
      htmlDark,
      htmlLight,
    },
  };
}
