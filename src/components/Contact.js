import React from 'react';
import Discord from '../img/discord.png';
import FaceBook from '../img/facebook.png';
import GitHub from '../img/github.png';
import Instagram from '../img/instagram.png';
import TikTok from '../img/tik-tok.png';
import Twitter from '../img/twitter.png';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>CONTACT US</h1>
      <div className='contact-logos'>
        <a href='https://www.github.com/yamakenth' id='github' target='_blank' rel="noreferrer">
          <img src={GitHub} alt='GitHub' className='contact-logo' />
        </a>
        <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
          <img src={FaceBook} alt='FaceBook' className='contact-logo' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel="noreferrer">
          <img src={Instagram} alt='Instagram' className='contact-logo' />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel="noreferrer">
          <img src={Twitter} alt='Twitter' className='contact-logo' />
        </a>
        <a href='https://www.discord.com' target='_blank' rel="noreferrer">
          <img src={Discord} alt='Discord' className='contact-logo' />
        </a>
        <a href='https://www.tiktok.com' target='_blank' rel="noreferrer">
          <img src={TikTok} alt='TikTok' className='contact-logo' />
        </a>
      </div>
    </div>
  );
}