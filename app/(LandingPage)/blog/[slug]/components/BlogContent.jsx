import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { slugify } from "@/lib/utils";

const BlogContent = ({ body, mainImage }) => {
  return (
    <div className="w-full">
      {/* <Image
        src={mainImage ? urlFor(mainImage).url() : ""}
        alt="Resume Image"
        className="w-full"
        width={700}
        height={700}
      /> */}

      <PortableText value={body} components={myPortableTextComponents} />
    </div>
  );
};

export default BlogContent;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={value ? urlFor(value).url() : ""}
        className="md:max-w-[85%] my-2 w-full md:mx-auto"
        alt="Post"
        width={400}
        height={400}
      />
    ),
  },
  block: {
    h2: ({ value }) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
    // link: ({ children, value }) => {
    //   const rel = !value.href.startsWith("/")
    //     ? "noreferrer noopener"
    //     : undefined;
    //   return (
    //     <a href={value.href} rel={rel} target="_blank">
    //       {children}
    //     </a>
    //   );
    // },
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("https:")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} target="_blank">
          {children}
        </a>
      );
    },
  },
};
