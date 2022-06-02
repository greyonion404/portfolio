import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Navbar from '../components/Navbar_Component/Navbar'
import ProjectSnippets from '../components/ProjectSnippets_Component/ProjectSnippets';
import { ProjectSnippetsContainer } from '../components/ProjectSnippets_Component/ProjectSnippets.styles';
import data from '../data';


export default function Projects() {

  const projects = data.info.projects;

  const [currentpage, SetCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 4;
  const pageCount = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const changePage = ({ selected }) => {
    SetCurrentPage(selected);
  }

  return (
    <>
      <Navbar />

      <ProjectSnippetsContainer>
        {projects && <ProjectSnippets projects={projects.slice(currentpage * ITEMS_PER_PAGE, (currentpage + 1) * ITEMS_PER_PAGE)} />}
      </ProjectSnippetsContainer>

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



