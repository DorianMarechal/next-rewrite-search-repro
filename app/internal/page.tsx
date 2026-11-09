import Link from "next/link";

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page = "1" } = await searchParams;
  return (
    <main>
      <h1>Page {page}</h1>
      <Link href={`/public?page=${Number(page) + 1}`}>Next page</Link>
    </main>
  );
}
