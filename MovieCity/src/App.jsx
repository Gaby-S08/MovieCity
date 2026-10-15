import { useMemo, useState } from 'react';
import { ArrowRight, Film, Sparkles, Heart, SlidersHorizontal, CirclePlay } from 'lucide-react';
import Header from './components/Header.jsx';
import MovieCard from './components/MovieCard.jsx';
import { MovieModal, LoginModal } from './components/Modal.jsx';
import afterlife from './assets/afterlife.jpg';
import transformers from './assets/transformers.jpg';
import mowgli from './assets/mowgli.jpg';
import shift from './assets/shift.png';
import squidgame from './assets/squidgame.webp';
import harrypotter from './assets/harrypotter.jpg';

const movies = [
  { id: 1, title: 'Afterlife', year: 2023, category: 'Suspense', rating: '8.1', image: afterlife, description: 'Uma história cheia de mistérios, escolhas difíceis e reviravoltas que prendem a atenção até o fim.' },
  { id: 2, title: 'Transformers', year: 2023, category: 'Ação', rating: '7.8', image: transformers, description: 'Robôs gigantes, batalhas intensas e uma aventura de ficção científica em escala épica.' },
  { id: 3, title: 'Mowgli', year: 2018, category: 'Aventura', rating: '7.4', image: mowgli, description: 'Uma jornada pela selva sobre coragem, amizade e a descoberta de onde realmente pertencemos.' },
  { id: 4, title: 'Shift', year: 2023, category: 'Comédia', rating: '7.2', image: shift, description: 'Uma comédia leve e imprevisível sobre encontros inesperados e mudanças de planos.' },
  { id: 5, title: 'Round 6', year: 2021, category: 'Drama', rating: '8.0', image: squidgame, description: 'Participantes enfrentam desafios extremos em uma trama de tensão, estratégia e sobrevivência.' },
  { id: 6, title: 'Harry Potter', year: 2001, category: 'Fantasia', rating: '8.5', image: harrypotter, description: 'Um jovem descobre um mundo mágico e começa uma jornada de amizade, mistério e aventura.' },
];
const categories = ['Todos', ...new Set(movies.map((movie) => movie.category))];

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [favorites, setFavorites] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const filteredMovies = useMemo(() => movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.trim().toLowerCase()) || movie.category.toLowerCase().includes(search.trim().toLowerCase());
    return matchesSearch && (category === 'Todos' || movie.category === category) && (!onlyFavorites || favorites.includes(movie.id));
  }), [search, category, onlyFavorites, favorites]);
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const scrollToCatalog = () => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });

  return <div className="app-shell" id="inicio">
    <Header search={search} setSearch={setSearch} onLogin={() => setLoginOpen(true)} />
    <main>
      <section className="hero-section"><div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="hero-copy"><span className="eyebrow"><Sparkles size={15} /> SUA PRÓXIMA HISTÓRIA COMEÇA AQUI</span><h1>Grandes histórias.<br /><span>Uma tela de cada vez.</span></h1><p>Explore aventuras, descubra novos mundos e encontre o filme perfeito para o seu momento.</p><div className="hero-actions"><button className="primary-button" onClick={scrollToCatalog}><CirclePlay size={18} /> Explorar filmes <ArrowRight size={17} /></button><a href="#sobre" className="text-link">Conheça a MovieCity</a></div><div className="hero-stats"><div><strong>06</strong><span>títulos em destaque</span></div><div className="stat-divider" /><div><strong>{categories.length - 1}</strong><span>categorias para explorar</span></div></div></div>
        <div className="hero-art" aria-label="Seleção de pôsteres em destaque"><div className="art-backdrop" /><img className="hero-poster poster-left" src={mowgli} alt="Pôster de Mowgli" /><img className="hero-poster poster-main" src={harrypotter} alt="Pôster de Harry Potter" /><img className="hero-poster poster-right" src={transformers} alt="Pôster de Transformers" /><div className="floating-note"><span className="note-icon"><Film size={18} /></span><div><strong>Seu próximo favorito</strong><small>está a poucos cliques</small></div><span className="note-dot" /></div></div>
      </section>
      <section className="catalog-section" id="catalogo"><div className="section-heading"><div><span className="eyebrow">ESCOLHA SUA PRÓXIMA SESSÃO</span><h2>Explore o catálogo<span>.</span></h2><p>Uma seleção para cada tipo de aventura.</p></div><button className={`favorites-filter ${onlyFavorites ? 'selected' : ''}`} onClick={() => setOnlyFavorites(!onlyFavorites)}><Heart size={16} fill={onlyFavorites ? 'currentColor' : 'none'} /> Favoritos <span>{favorites.length}</span></button></div>
        <div className="catalog-tools" id="categorias"><div className="category-list" role="group" aria-label="Filtrar por categoria">{categories.map((item) => <button key={item} className={category === item ? 'category-chip active' : 'category-chip'} onClick={() => setCategory(item)}>{item}</button>)}</div><span className="results-count"><SlidersHorizontal size={15} /> {filteredMovies.length} {filteredMovies.length === 1 ? 'filme encontrado' : 'filmes encontrados'}</span></div>
        {filteredMovies.length ? <div className="movie-grid">{(showAll ? filteredMovies : filteredMovies.slice(0, 6)).map((movie) => <MovieCard key={movie.id} movie={movie} favorite={favorites.includes(movie.id)} onFavorite={toggleFavorite} onDetails={setSelectedMovie} />)}</div> : <div className="empty-state"><Film size={34} /><h3>Nenhum filme encontrado</h3><p>Tente outra busca, categoria ou desative o filtro de favoritos.</p><button className="secondary-button" onClick={() => { setSearch(''); setCategory('Todos'); setOnlyFavorites(false); }}>Limpar filtros</button></div>}
        {filteredMovies.length > 6 && <button className="secondary-button more-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Mostrar menos' : 'Ver mais filmes'} <ArrowRight size={16} /></button>}
      </section>
      <section className="about-section" id="sobre"><div className="about-icon"><Sparkles size={25} /></div><div><span className="eyebrow">SOBRE O PROJETO</span><h2>Seu cinema, do seu jeito.</h2><p>A MovieCity é uma landing page de demonstração criada com React e Vite. Navegue pelo catálogo, filtre categorias, pesquise títulos e monte sua lista de favoritos.</p></div><button className="about-cta" onClick={scrollToCatalog}>Descobrir filmes <ArrowRight size={17} /></button></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><span className="brand-icon"><Film size={18} /></span><span>Movie<span>City</span></span></a><p>Feito para quem ama boas histórias.</p><span className="footer-copy">© 2026 MovieCity · Projeto educacional</span></footer>
    <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />{loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
  </div>;
}
