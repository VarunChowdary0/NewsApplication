// MENU.js
import React, { useContext } from 'react';
import { Globals } from '../globals/Globals';

const MENU = () => {
  const {Mode , SetMode} = useContext(Globals)
  const {keyword , setKey} = useContext(Globals)
  const handleExploreClick = () => {
    SetMode('Explore');
  };

  const handleHeadlinesClick = () => {
    SetMode('Headlines');
  };
  const handleTechClick = () => {
    SetMode('Tech');
  };

  const handleBussinessClick = () => {
    SetMode('Bussiness');
    setKey('bussiness')
  };
  const handleEntatiClick = () => {
    SetMode('Entertainment');
    setKey('entertainment')
  };
  const handleGEnralClick = () => {
    SetMode('General');
    setKey('general');
  };
  const handleHelthClick = () => {
    SetMode('Health');
    setKey('health')
  };
  const handleScienceClick = () => {
    SetMode('Science');
    setKey('science')
  };
  const handleSportClick = () => {
    SetMode('Sports');
    setKey('sports')
  };

  return (
    <nav className='flex bg-slate-200 space-x-7 pr-10 dark:text-[#fff] max-sm:space-x-2 max-sm:pr-3 hover:cursor-pointer'>
      <a onClick={handleExploreClick}>Explore</a>
      <a onClick={handleHeadlinesClick}>Headlines</a>
      <a onClick={handleTechClick}>Technologies</a>
      <a onClick={handleBussinessClick}>Business</a>
      <a onClick={handleEntatiClick}>Entertainment</a>
      <a onClick={handleGEnralClick}>General</a>
      <a onClick={handleHelthClick}>Health</a>
      <a onClick={handleScienceClick}>Science</a>
      <a onClick={handleSportClick}>Sports</a>
      <a className='text-[#1c5c16]' href='/axios'>Axios</a>
    </nav>
  );
};

export default MENU;
