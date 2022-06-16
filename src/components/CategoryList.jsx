import React from 'react';
import CategoryItem from './CategoryItem';

export default function CategoryList({catolog = []}) {

  return (
    <div className="list">
        {catolog.map(el => (
            <CategoryItem key={el.idCategory} {...el}/>
        ))}
    </div>
  )
}
