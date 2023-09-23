import { notFound } from 'next/navigation';

type PageProps = {
  searchParams?: Article;
};

export default function Page({ searchParams }: PageProps) {
  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) return notFound();

  const { image, title, author, source, published_at, description }: Article = searchParams;

  return (
    <article className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
      {image && <img src={image} alt={title} className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" />}
      <div className="px-10">
        <h1 className="headerTitle px-0 no-underline pb-2">{title}</h1>
        <div>
          <h2>{author}</h2>
          <h2>Source: {source}</h2>
          <p className="pl-4">{published_at}</p>
        </div>
        <p className="p-4">{description}</p>
      </div>
    </article>
  );
}
