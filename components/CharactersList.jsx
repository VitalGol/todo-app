import React from 'react';
import Link from 'next/link';

const CharactersList = ({ characters }) => {
  // console.log('🚀 ~ Character ~ params:', params);
  // console.log('🚀 ~ Character ~ params:', characters);
  return (
    <ul>
      {characters.map((item) => (
        <Link href={`/cartoon/${item.id}`} key={item.id}>
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );

  // return <div>-----{params.id}</div>;
};

export default CharactersList;
