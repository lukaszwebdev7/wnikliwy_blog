import { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import PostPreview from '../components/post-preview';

export default function MoreStories({ arrays }) {
	const firstArray = arrays[0];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	function loadPostsHandler(e, array) {
		setChosenArray(array);
	}

	return (
		<section>
			<link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet" />
			<h2
				style={{ fontFamily: 'Lobster Two', letterSpacing: '3px' }}
				className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-coffee underline"
				id="more"
			>
				Więcej ...
			</h2>
			<div>
				<ul className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
					{chosenArray.map((post) => (
						<PostPreview
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							slug={post.slug}
							excerpt={post.excerpt}
						/>
					))}
				</ul>
				<div className="flex justify-center mb-20">
					<div className="flex flex-row">
						{arrays.map((array, index) => (
							<ScrollIntoView selector="#more">
								<button
									className="inline-block w-8 cursor-pointer hover:text-blue-text text-center"
									id={index + 1}
									key={index}
									onClick={(e) => loadPostsHandler(e, array)}
								>
									{index + 1}
								</button>
							</ScrollIntoView>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
