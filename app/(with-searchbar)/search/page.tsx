export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await await searchParams;
  return <>검색 페이지 {q}</>;
}
