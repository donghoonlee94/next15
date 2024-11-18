import BookItemSekeleton from "./book-item-skeleton";

export default function BookListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <BookItemSekeleton key={`book-item-skeleton-${idx}`} />);
}
