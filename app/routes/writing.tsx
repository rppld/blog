import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/cloudflare";
import type { Post } from "~/lib/storyblok";
import { getResource } from "~/lib/storyblok";
import * as ResourceList from "~/components/resource-list";
import Container from "~/components/container";
import { format } from "date-fns";
import PageTitle from "~/components/page-title";

type Data = {
  stories: Post[];
};

// Loaders provide data to components and are only ever called on the
// server, so you can connect to a database or run any server side
// code you want right next to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const { stories } = await getResource<Data>({
    filterQuery: {
      attribute: "component",
      operation: "in",
      query: "post",
    },
    sortBy: "first_published_at:desc",
  });

  const data: Data = {
    stories,
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
export default function Writing() {
  let data = useLoaderData<Data>();

  return (
    <div>
      <Container>
        <PageTitle>Lorem ipsum dolor sit amet</PageTitle>
      </Container>

      <Container className="mt-12">
        <ResourceList.List>
          {data.stories.map((story) => (
            <ResourceList.Item key={story.slug}>
              <ResourceList.ItemLink to={`/writing/${story.slug}`}>
                <ResourceList.ItemTitle>{story.name}</ResourceList.ItemTitle>
                <ResourceList.ItemSpacer />
                <ResourceList.ItemData>
                  {format(new Date(story.first_published_at), "d MMM ’yy")}
                </ResourceList.ItemData>
              </ResourceList.ItemLink>
            </ResourceList.Item>
          ))}
        </ResourceList.List>
      </Container>
    </div>
  );
}
