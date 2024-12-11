"use client";
import { useEffect, useState } from "react";
import { ImgComp } from "@/shared/ImgComp";
import { useHandleCarousel } from "../hooks/useHandleCarousel";
import UserSmallProfile from "../shared/userSmallProfile";
import PaginateDotButton from "../shared/PaginationDotsButton";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";

const BLogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  const { scroll, activeIndex, carouselRef, startAutoScroll } =
    useHandleCarousel();

  // Fetch blogs when component mounts
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const query = `
      *[_type == 'post'] | order(_createdAt desc) {
        title,
        "currentSlug": slug.current,
        mainImage,
        "desc": body[0].children[1].text,
        categories[]->{
          _id,
          title
        },
        author-> {
          _id,
          name,
          "bio": bio[0].children[0].text,
          image
        }
      }
    `;

    try {
      const data = await client.fetch(query);
      setBlogs(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl font-semibold">Loading Blogs...</p>
        </div>
      ) : (
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar mt-10 gap-x-2"
        >
          {blogs.length &&
            blogs?.map((blog, index) => (
              <Link href={`/blog/${blog.currentSlug}`}>
                <div
                  key={blog.currentSlug}
                  className="flex-shrink-0 w-full md:w-[300px] lg:w-[400px] md:mr-4"
                >
                  <div className="bg-white rounded-lg max-w-sm mb-5">
                    <ImgComp
                      src={urlFor(blog.mainImage).url()}
                      alt={blog.title}
                      className={"hover:shadow-xl"}
                    />

                    <div className="flex flex-col gap-y-1">
                      {/* <p>{blog?.categories && blog?.categories[0]?.title}</p> */}
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {blog?.title}
                      </h5>
                      {/* <p className="font-normal text-gray-700 mb-3 text-lg">
                        {blog.desc}
                      </p>
                      <UserSmallProfile
                        img={
                          blog?.author?.image &&
                          urlFor(blog?.author?.image).url()
                        }
                        alt={blog?.author?.name && blog?.author.name}
                        name={blog?.author?.name && blog?.author.name}
                        subDesc={blog?.author?.bio && blog?.author.bio}
                      /> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}

      <PaginateDotButton
        count={blogs.length}
        scroll={scroll}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default BLogCard;
