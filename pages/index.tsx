import fs from "fs";
import { highlight } from "@/lib/shiki";
import { InferGetStaticPropsType } from "next";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
}

export async function getStaticProps() {
  const code = fs.readFileSync("lib/shiki.ts", "utf8");
  const html = await highlight(code);

  return {
    props: {
      html,
    },
  };
}
