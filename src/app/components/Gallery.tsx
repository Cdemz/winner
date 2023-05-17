'use client';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className="bg-[var(--color-bg)] flex flex-col ">
      <h1 className="justify-center items-center text-black mx-auto text-3xl my-3 font-extrabold">
        GALLERY
      </h1>
      <ImageList
        sx={{}}
        variant="quilted"
        cols={4}
        rowHeight={121}
        className="md:p-5"
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: '/images/img 1.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/img-2.png',
    title: 'Burger',
  },
  {
    img: '/images/img-3.png',
    title: 'Camera',
  },
  {
    img: '/images/img7.png',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '/images/img9.png',
    title: 'Hats',
    cols: 2,
  },
  {
    img: '/images/img11.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/img6.png',
    title: 'Basketball',
  },
  {
    img: '/images/img8.png',
    title: 'Fern',
  },
  {
    img: '/images/img-6.png',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/about-img.png',
    title: 'Tomato basil',
  },
  {
    img: '/images/img-5.png',
    title: 'Sea star',
  },
  {
    img: '/images/img-4.png',
    title: 'Bike',
    cols: 2,
  },
];
