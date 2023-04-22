const Buscar = (setBuscar,setPage) => {
    return (
        <form className=''>
            <input onChange={
                (e)=>{
                    setPage(1);
                    setBuscar(e.target.value)                

                }

            } type="text" placeholder="Buscar personaje por nombre" className='form-control col-xs-2'/>

        </form>
    )
}

export default Buscar;