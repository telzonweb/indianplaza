import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import PostList from "@/components/posts/post-list";
import {Helmet} from "react-helmet"

const Blog = useFramerTransition(
	<>
		<Helmet>
			<title>Blog</title>
		</Helmet>
		<main className="relative">
			<SectionPageTitle>Blog</SectionPageTitle>
			<section className="border-b py-24">
				<div className="container">
					<PostList limit={6} showPagination={true} />
				</div>
			</section>
		</main>
	</>
)

export default Blog