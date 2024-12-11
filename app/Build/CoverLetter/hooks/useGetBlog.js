import { client } from "@/app/lib/sanity";
import { useEffect, useState } from "react";

export const useGetBlog = (slug) => {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const query = `
*[_type == 'post' && slug.current == 'mastering-the-applicant-tracking-system-ats'] {
        "currentSlug": slug.current, 
          title,
          publishedAt,
          excerpt,
          body,
          mainImage,
           categories[]->{
          _id,
          title
        },
        author-> {
          _id,
          name,
          bio,
          image
        }
      }[0]
`

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await client.fetch(query)
                setBlog(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [slug]);

    return { blog, isLoading, error };
}