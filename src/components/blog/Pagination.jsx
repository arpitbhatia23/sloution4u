import Link from "next/link";

function createPageNumbers(currentPage, totalPages) {
  const pages = [];

  for (
    let page = Math.max(1, currentPage - 2);
    page <= Math.min(totalPages, currentPage + 2);
    page++
  ) {
    pages.push(page);
  }

  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
}) {
  if (totalPages <= 1) return null;

  const pageNumbers = createPageNumbers(
    currentPage,
    totalPages
  );

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 && (
        <Link
          href={`/blogs?page=${currentPage - 1}`}
          className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          ← Previous
        </Link>
      )}

      {pageNumbers[0] > 1 && (
        <>
          <Link
            href="/blogs?page=1"
            className="rounded-lg border border-gray-300 px-4 py-2"
          >
            1
          </Link>

          {pageNumbers[0] > 2 && (
            <span className="px-2 text-gray-500">…</span>
          )}
        </>
      )}

      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`/blogs?page=${page}`}
          aria-current={
            page === currentPage ? "page" : undefined
          }
          className={`rounded-lg border px-4 py-2 font-medium transition ${
            page === currentPage
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}

      {pageNumbers.at(-1) < totalPages && (
        <>
          {pageNumbers.at(-1) < totalPages - 1 && (
            <span className="px-2 text-gray-500">…</span>
          )}

          <Link
            href={`/blogs?page=${totalPages}`}
            className="rounded-lg border border-gray-300 px-4 py-2"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={`/blogs?page=${currentPage + 1}`}
          className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}