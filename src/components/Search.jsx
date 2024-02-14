import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from '../Context';
function Search() {
  const {setSearch,search,fetchRandomMeal} = useGlobalContext()
  const handleSearch = (e) =>{
    setSearch(e.target.value);
    
  }
  const handleSubmit = ()=>{
    fetchRandomMeal();
  }
  

  return (
  <>
  <div className='container d-flex justify-content-center m-5'>
    <Form.Control type="text" placeholder="Search" style={{ width: '25rem',marginRight:'10px' }} value={search} onChange={handleSearch} />
    <Button variant="warning" onClick={handleSubmit}>surprise me</Button>
  </div>
  </>
  )
}

export default Search