import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  img: (props) => (
    <Image
      {...(props as { src: string; alt: string })}
      width={800}
      height={400}
      className="rounded-sm"
    />
  ),
  a: (props) => (
    <a
      {...props}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-bamboo-dark underline decoration-bamboo/30 underline-offset-2 transition-colors hover:text-bamboo"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-2 border-bamboo bg-bamboo/[0.04] pl-4 italic"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="overflow-x-auto border border-border p-4 text-sm rounded-none"
    />
  ),
};
