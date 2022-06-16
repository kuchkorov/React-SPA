import React, {useState, useEffect } from 'react';
import  { getAllCategories } from '../api';
import Loader from '../components/Loader';
import CategoryList from '../components/CategoryList';


export default function Home() {

  const [catolog, setCatolog] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCatolog(data.categories)
    })
  }, [])
  return (
    <>
      {!catolog.length ? (
        <Loader />
      ) : (
        <CategoryList catolog={catolog} />
      )}
    </>
  )
}
