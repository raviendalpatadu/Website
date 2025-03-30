import React from 'react';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewGallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1519417688386-31394a01c4b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1511374322656-8face3d89ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1515474594679-6a12d48b0468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: 800,
      height: 600,
    },
    {
        src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1519417688386-31394a01c4b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1511374322656-8face3d89ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1515474594679-6a12d48b0468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1519417688386-31394a01c4b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1511374322656-8face3d89ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1515474594679-6a12d48b0468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
      }

  ];

  return (
    <div className="p-4 py-20">
      <MasonryPhotoAlbum photos={images} columns={3} spacing={8} />
    </div>
    
  );
};

export default NewGallery;
