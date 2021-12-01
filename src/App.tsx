import { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState('Ação');

  function changeSelectedGenre(id: number, title: string) {
    setSelectedGenreId(id);
    setSelectedGenreTitle(title);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar changeSelectedGenre={changeSelectedGenre}/>
      <Content genreId={selectedGenreId} genreTitle={selectedGenreTitle} />
    </div>
  )
}