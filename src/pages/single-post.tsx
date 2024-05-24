// import useFramerTransition from "@/hooks/use-transition";
// import BlogComments from "@/components/blog-comments";
// import { getDate } from "@/lib/utils";
// import {
//   faFacebook,
//   faXTwitter,
//   faLinkedin,
//   faReddit,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import SocialIcon from "@/components/social-icon";
import PostData from "@/data/posts.json";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [fetchedPost, setPost] = useState({});
  const id = useParams();
  const pathUrl = id["*"];
  const slug = pathUrl.split("/")[1];
  // console.log(slug);

  useEffect(() => {
    const post = PostData.find((item) => item.slug === slug);
    if (post) {
      setPost(post); // Update state with the found post
      // console.log(post);
    } else {
      // Handle the case where no post is found (optional)
      console.log("No post found with the slug:", slug);
    }
  }, [slug]); // Add slug as a dependency to useEffect

  return (
    <>
      <Helmet>
        <title>Single Post</title>
      </Helmet>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <div className="relative flex flex-col items-center justify-center px-4 py-20 before:absolute before:inset-0 before:z-[1] before:bg-foreground/75 sm:h-96 lg:h-[30rem]">
          {fetchedPost && (
            <img
              // @ts-expect-error
              src={fetchedPost.image}
              // @ts-expect-error
              alt={fetchedPost.title}
              className="absolute inset-0 mb-6 h-full w-full object-cover"
            />
          )}
          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1
              className="mb-5 text-white lg:text-5xl"
              // @ts-expect-error
              dangerouslySetInnerHTML={{ __html: fetchedPost.title }}
            ></h1>
          </div>
        </div>

        <section className="border-b pb-24 pt-16">
          <div className="container">
            <article
              className="post-content prose prose-lg mx-auto max-w-[50rem] dark:prose-invert prose-headings:text-foreground"
              // @ts-expect-error
              dangerouslySetInnerHTML={{ __html: fetchedPost.content }}
            ></article>
          </div>
        </section>
      </main>
    </>
  );
};

export default SinglePost;
