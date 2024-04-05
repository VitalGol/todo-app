'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import cartoon_img from '../../assets/rick-and-morty-1.png';
import cartoon_name from '../../assets/rick-and-morty-name.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Cartoon = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  const fetchCharacters = async () => {
    try {
      // const { data } = await fetch(
      //   `${process.env.NEXT_PUBLIC_CARTOON_LINK}/?name=${query}`,
      //   { method: 'GET' }
      // );
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_CARTOON_LINK}/?name=${query}`
      );
      // console.log('🚀 ~ fetchCharacters ~ data:', data.results);

      toast.success('Successfully Loaded!', {
        autoClose: 2000,
      });

      setCharacters(data.results);
    } catch (error) {
      toast.error('Error');
      console.error('Error', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <div className=" flex w-[90%] max-w-[1000px] mt-8 mx-auto">
        <ToastContainer theme="dark" />
        <div className="flex items-center justify-start ">
          <Image
            src={cartoon_img}
            width={200}
            height={200}
            alt="Picture of the cartoon"
          />
        </div>
        <div className="flex flex-col justify-end flex-1">
          <div className="flex items-center justify-center ">
            <Image
              src={cartoon_name}
              width={300}
              height={100}
              alt="Picture of the cartoon's name"
            />
          </div>

          <form className="flex justify-center items-center w-[80%] max-w-[800px] mt-4 mb-8 mx-auto">
            <input
              type="text"
              name="title"
              placeholder="Search Character"
              className="w-full px-3 py-3 mr-4 border-2 bg-slate-100"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1 w-[100%] max-w-[1000px] mt-8 mx-auto ">
        {characters.map((item) => (
          <Link href={`/cartoon/${item.id}`} key={item.id}>
            <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 rounded-md ">
              <Image
                src={item.image}
                height={200}
                width={200}
                alt={item.name}
                className="mb-4"
              />
              <p className="text-center font-bold  max-w-[200px]">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cartoon;
