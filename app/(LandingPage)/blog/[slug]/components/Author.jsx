"use client";
import UserSmallProfile from "@/app/(LandingPage)/shared/userSmallProfile";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

const Author = ({ author, categories, publishedAt }) => {
  return (
    <div className="py-6  w-full">
      <UserSmallProfile
        img={author ? urlFor(author?.image).url() : ""}
        alt={author?.name}
        name={author?.name}
        subDesc={<PortableText value={author?.bio} />}
      />
      <div className="flex space-x-3 items-center flex-wrap mt-3">
        {categories?.map((category, index) => (
          <Badge variant="secondary" key={index}>
            {category.title}
          </Badge>
        ))}
      </div>
      <p className="text-sm">
        Published at: {publishedAt && format(new Date(publishedAt), "PPP")}
      </p>
    </div>
  );
};

export default Author;
