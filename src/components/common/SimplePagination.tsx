import React from 'react';
import { Link } from '@inertiajs/react';
import { Meta } from '../../types';

interface Props {
  className?: string;
  meta: Meta;
  showPerPageSelector?: boolean;
  defaultValue?: number;
}

export default function SimplePagination({
  meta,
  className,
  showPerPageSelector = false,
  defaultValue,
}: Props) {
  const { current_page, per_page, to, from } = meta;

  const perPageValue = defaultValue ?? per_page;

  const results_on_page = to - from + 1;
  const has_more_pages = results_on_page === per_page;

  function getNextPageLink() {
    if (typeof window !== 'undefined') {
      const search = new URLSearchParams(window.location.search);
      search.set('page', String(current_page + 1));

      return `?${search.toString()}`;
    }

    return '';
  }

  function getPrevPageLink() {
    if (typeof window !== 'undefined') {
      const search = new URLSearchParams(window.location.search);
      search.set('page', String(current_page - 1));

      return `?${search.toString()}`;
    }

    return '';
  }

  const nextPageLink = getNextPageLink();
  const prevPageLink = getPrevPageLink();

  function handlePerPageChange(e: React.SyntheticEvent<HTMLSelectElement>) {
    const search = new URLSearchParams(window?.location.search);
    search.set('limit', e.currentTarget.value);
    search.set('page', '1');

    window.location.href = `?${search.toString()}`;
  }

  return (
    <div className={`${className ?? ''}`}>
      <nav className="font-bold flex justify-between items-center gap-6">
        <Link
          href={prevPageLink}
          className="flex items-center gap-2"
          disabled={current_page === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Prev
        </Link>
        <div className="flex gap-6 items-center">
          <p>Page {current_page}</p>
          {showPerPageSelector ? (
            <select value={perPageValue} onChange={handlePerPageChange}>
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
            </select>
          ) : (
            ''
          )}
        </div>
        <Link
          href={nextPageLink}
          className="flex items-center gap-2"
          disabled={!has_more_pages}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
