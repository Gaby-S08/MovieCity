import { useState } from 'react';
import { Clapperboard, Menu, X, Search, UserRound } from 'lucide-react';

export default function Header({ search, setSearch, onLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={closeMenu} aria-label="MovieCity início">
        <span className="brand-icon"><Clapperboard size={21} /></span><span>Movie<span>City</span></span>
      </a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'navigation open' : 'navigation'}>
        <a href="#inicio" onClick={closeMenu}>Início</a><a href="#catalogo" onClick={closeMenu}>Filmes</a><a href="#categorias" onClick={closeMenu}>Categorias</a><a href="#sobre" onClick={closeMenu}>Sobre</a>
      </nav>
      <div className="header-actions">
        <label className="search-box"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar filme..." aria-label="Buscar filme" /></label>
        <button className="login-button" onClick={onLogin}><UserRound size={17} /> <span>Entrar</span></button>
      </div>
    </header>
  );
}
