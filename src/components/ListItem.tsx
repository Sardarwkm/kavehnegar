import React from "react";
import { useRouter } from "next/router";

interface Props {
  index: number;
  id: number;
  title: string;
}
const ListItem = ({ index, id, title }: Props) => {
  const router = useRouter();

  return (
    <div
      className='bg-white text-black bg-zinc-100 rounded overflow-hidden shadow-md mb-6 cursor-pointer hover:scale-105 transition-all'
      onClick={() => router.push(`/details/${id}`)}>
      <div className='px-1 py-1 sm:px-6 sm:py-4 h-28 overflow-y-scroll lg:h-16 flex items-center'>
        <div className='flex gap-1'>
          <span className='text-pink-600 '>{index}- </span>
          <span className='capitalize'>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
