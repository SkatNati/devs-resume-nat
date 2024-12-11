"use client";
import { useGetBlog } from "@/app/Build/CoverLetter/hooks/useGetBlog";
import IsLoading from "@/shared/loading/IsLoading";
import { useParams } from "next/navigation";
import Author from "./components/Author";
import BlogContent from "./components/BlogContent";

const BlogArticle = () => {
  const { slug } = useParams();
  const { isLoading, blog, error } = useGetBlog(slug);

  console.log(blog);

  if (isLoading && !blog) {
    return <IsLoading />;
  }
  return (
    <div className="max-w-[85%] mx-auto py-12">
      <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:items-start">
        <div className="md:max-w-[40%] w-full">
          {/* <Author
            author={blog?.author}
            categories={blog?.categories}
            publishedAt={blog?.publishedAt}
            /> */}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-4xl font-bold">{blog?.title}</h2>
        <BlogContent mainImage={blog?.mainImage} body={blog?.body} />
      </div>
    </div>
  );
};

export default BlogArticle;
