import React from 'react'
import { HomeHeader } from './components/HomeHeader';
import { HomeBody } from './components/HomeBody';

export default function page() {
    return (
      <div>
        <HomeHeader />
        <HomeBody />
      </div>
    )
}