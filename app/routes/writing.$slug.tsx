import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/cloudflare";
import {
  getImageSrcSet,
  getImageTransform,
  getResource,
} from "~/lib/storyblok";
import type { Post } from "~/lib/storyblok";
import Container from "~/components/container";
import Media from "~/components/media";
import createMarkup from "~/utils/create-markup";
import PageTitle from "~/components/page-title";
import Lede from "~/components/lede";

type Data = {
  story: Post;
};

// Loaders provide data to components and are only ever called on the
// server, so you can connect to a database or run any server side
// code you want right next to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async ({ params }) => {
  const { story } = await getResource({
    slug: `posts/${params.slug}`,
  });

  const data: Data = {
    story,
  };

  // https://remix.run/api/remix#json
  return data;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Philipp Rappold—Writing",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Article() {
  let data = useLoaderData<Data>();

  return (
    <article>
      <Container>
        <PageTitle>{data.story.name}</PageTitle>
        {data.story.content.lede && <Lede>{data.story.content.lede}</Lede>}
      </Container>

      <Container className="mt-12 space-y-6">
        {data.story.content.body.map((block) =>
          block.component === "paragraph" ? (
            <p
              key={block._uid}
              dangerouslySetInnerHTML={createMarkup(block.text, {
                renderInline: true,
              })}
            />
          ) : block.component === "list" ? (
            <figure
              key={block._uid}
              dangerouslySetInnerHTML={createMarkup(block.text, {
                renderInline: true,
              })}
            />
          ) : block.component === "heading" && block.level === "2" ? (
            <h2 key={block._uid}>{block.text}</h2>
          ) : block.component === "heading" && block.level === "3" ? (
            <h3 key={block._uid}>{block.text}</h3>
          ) : block.component === "heading" && block.level === "4" ? (
            <h4 key={block._uid}>{block.text}</h4>
          ) : block.component === "image" ? (
            <Media caption={block.caption} key={block._uid}>
              {block.file && (
                <img
                  key={block._uid}
                  alt={block.alt}
                  src={getImageTransform(
                    block.file,
                    "100x0/filters:quality(50)"
                  )}
                  // srcWebp={getImageTransform(
                  //   block.file,
                  //   "100x0/filters:quality(50):format(webp)"
                  // )}
                  srcSet={getImageSrcSet(block.file)}
                  // srcSetWebp={getImageSrcSet(block.file, "filters:format(webp)")}
                  sizes="(max-width: 768px) 80vw, 100vw"
                  // aspectRatio={getAspectRatioFromImageUrl(block.file)}
                />
              )}
            </Media>
          ) : null
        )}
      </Container>
    </article>
  );
}
