import useFramerTransition from "@/hooks/use-transition";
import BlogComments from "@/components/blog-comments";
import { getDate } from "@/lib/utils";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faReddit,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "@/components/social-icon";
import PostData from "@/data/posts.json";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useParams } from "react-router-dom";

const post = PostData[0];
const postURL = new URL(
  `https://wordpress-597675-3975829.cloudwaysapps.com/get-organized-technology-is-your-friend/`,
);
const featuredMedia = PostData[0].featuredmedia;
const author = post?.author;
const featuredImageSizes = featuredMedia?.["media_details"];

const SinglePost = () => {
  const [fetchedPost, setPost] = useState({});
  const slug = useParams();
  console.log(slug);

  return (
    <>
      <Helmet>
        <title>Single Post</title>
      </Helmet>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <div className="relative flex flex-col items-center justify-center px-4 py-20 before:absolute before:inset-0 before:z-[1] before:bg-foreground/75 sm:h-96 lg:h-[30rem]">
          {featuredMedia && featuredImageSizes && (
            <img
              src={featuredImageSizes?.["source_url"]}
              alt={featuredMedia.alt_text}
              className="absolute inset-0 mb-6 h-full w-full object-cover"
            />
          )}
          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1
              className="mb-5 text-white lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>
          </div>
        </div>
        <section className="border-b pb-24 pt-16">
          <div className="container">
            <article
              className="post-content prose prose-lg mx-auto max-w-[50rem] dark:prose-invert prose-headings:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></article>
          </div>
        </section>
      </main>
    </>
  );
};

export default SinglePost;
