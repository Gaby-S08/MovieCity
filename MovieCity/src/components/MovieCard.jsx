import { Heart, Play, Star } from 'lucide-react';

export default function MovieCard({ movie, favorite, onFavorite, onDetails }) {
  return (
    <article className="movie-card">
      <button className="poster-button" onClick={() => onDetails(movie)} aria-label={`Ver detalhes de ${movie.title}`}>
        <img src={movie.image} alt={`Pôster de ${movie.title}`} loading="lazy" />
        <span className="poster-overlay"><span className="play-circle"><Play size={20} fill="currentColor" /></span><span>Ver detalhes</span></span>
      </button>
      <button className={`favorite-button ${favorite ? 'is-favorite' : ''}`} onClick={() => onFavorite(movie.id)} aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}><Heart size={18} fill={favorite ? 'currentColor' : 'none'} /></button>
      <div className="movie-info"><div className="movie-title-row"><h3>{movie.title}</h3><span className="rating"><Star size={13} fill="currentColor" /> {movie.rating}</span></div><p>{movie.year} <span>•</span> {movie.category}</p></div>
    </article>
  );
}
