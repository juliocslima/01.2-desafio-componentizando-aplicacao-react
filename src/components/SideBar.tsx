import { useEffect, useState } from "react";
import { Button } from "./Button";

import '../styles/sidebar.scss';
import { api } from "../services/api";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  changeSelectedGenre: (param1: number, param2: string) => void
}

export function SideBar(props: SideBarProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    
  }, [selectedGenreId]);

  function handleClickButton(id: number, title: string) {
    setSelectedGenreId(id);
    props.changeSelectedGenre(id, title);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id, genre.title)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}