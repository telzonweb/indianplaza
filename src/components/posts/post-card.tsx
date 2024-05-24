import { Link } from "react-router-dom";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { getDateDay, getDateMonth } from "@/lib/utils";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const featuredMedia = post.featuredmedia;

  // console.log(post);

  return (
    <article
      className="hover-shadow overflow-hidden rounded-lg bg-white dark:bg-slate-850"
      itemType="https://schema.org/Article"
    >
      <figure className="after: relative overflow-hidden">
        <Link to={post.slug} className="group">
          <img
            src={post.image}
            alt={post.title}
            // width={featuredImageSizes.width}
            // height={featuredImageSizes.height}
            className="transition-transform duration-1600 will-change-transform group-hover:scale-105"
          />
        </Link>
      </figure>
      <div className="rounded-b-lg p-10">
        <h2 className="mb-4 text-xl font-bold">
          <Link
            className="hover:text-primary"
            to={post.slug}
            dangerouslySetInnerHTML={{ __html: post?.title }}
          />
        </h2>
      </div>
    </article>
  );
};

export default PostCard;
