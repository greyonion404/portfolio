import { useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';

import Navbar from '../components/Navbar_Component/Navbar'
import BlogSnippets from '../components/BlogSnippets_Component/BlogSnippets';
import { BlogSnippetsContainer } from '../components/BlogSnippets_Component/BlogSnippets.styles';






export default function Blogs({ blogs }) {

  const [currentpage, SetCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const ITEMS_PER_PAGE = 4;
  useEffect(() => {
    SetCurrentPage(0);
    setPageCount(Math.ceil(blogs.length / ITEMS_PER_PAGE));
  }, [blogs]);

  const changePage = ({ selected }) => {
    SetCurrentPage(selected);
  }
  return (
    <>
      <Navbar />

      <BlogSnippetsContainer>
        {blogs && <BlogSnippets blogs={blogs.slice(currentpage * ITEMS_PER_PAGE, (currentpage + 1) * ITEMS_PER_PAGE)} />}
      </BlogSnippetsContainer>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"PaginationContainer"}
        pageLinkClassName={"PaginationLink"}
        activeClassName={"ActivePaginationLink"}
      />
      
    </>
  )
}




// gets the props for the current homepage
export const getServerSideProps = async pageContext => {

  const sanityQuery = encodeURIComponent(`*[_type == "post"]{
    title,
    slug,
    publishedAt,
    mainImage,
    authorName,
    keywords,
    description
  }`);
  const backendURL = `${process.env.NEXT_PUBLIC_SANITY_URL}${sanityQuery}`;
  try {
    const response = await fetch(backendURL).then(response => response.json());
    const blogs = response.result;
    if (!blogs) return { notFound: true };
    blogs.sort((a, b) => a.publishedAt < b.publishedAt ? 1 : -1);
    return { props: { blogs: blogs } };
  }
  catch (err) {
    return { notFound: true };
  }
};