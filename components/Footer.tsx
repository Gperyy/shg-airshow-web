
import React from 'react';
import Logo from './Logo';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-secondary text-white py-20">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="mb-12 group cursor-pointer flex flex-col items-center">
          <Logo className="h-48 md:h-64 w-auto mb-6 transition-transform group-hover:scale-105 duration-500" />
        </div>

        <div className="flex space-x-10 mb-14">
          <a href="#" className="text-gray-400 hover:text-primary transition-all hover:scale-125 duration-300">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-all hover:scale-125 duration-300">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-all hover:scale-125 duration-300">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
          </a>
        </div>

        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.4em] max-w-lg leading-relaxed">
          © 2026 SHG AIRSHOW. {lang === 'TR' ? 'SİVRİHİSAR HAVACILIK MERKEZİ' : 'SIVRIHISAR AVIATION CENTER'}. <br className="hidden md:block" /> {lang === 'TR' ? 'TÜM HAKLARI SAKLIDIR' : 'ALL RIGHTS RESERVED'}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
