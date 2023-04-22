import ReactPaginate from 'react-paginate';

const Pagination = (info,setPage) => {

    return(
        
        <ReactPaginate 
            nextLabel="Siguiente" previousLabel="Anterior"        
            className='pagination justify-content-center gap-4 my-4' 
            pageCount={info.pages}
            nextClassName="btn  " 
            previousClassName='btn '
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'         
            onPageChange={(data)=>setPage(data.selected + 1)}
        />
    )

}

export default Pagination