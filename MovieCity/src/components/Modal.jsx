import { useEffect } from 'react';
import { X, Star, Calendar, Clapperboard } from 'lucide-react';

export function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return undefined;
    const handleKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [movie, onClose]);
  if (!movie) return null;
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><section className="movie-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={onClose} aria-label="Fechar"><X /></button><img className="modal-poster" src={movie.image} alt={`Pôster de ${movie.title}`} /><div className="modal-content"><span className="eyebrow">DESTAQUE MOVIECITY</span><h2 id="modal-title">{movie.title}</h2><div className="modal-meta"><span><Calendar size={15} /> {movie.year}</span><span><Clapperboard size={15} /> {movie.category}</span><span className="rating"><Star size={14} fill="currentColor" /> {movie.rating}</span></div><p>{movie.description}</p><div className="notice">Prévia de catálogo para fins educacionais. A reprodução não está disponível nesta demonstração.</div><button className="primary-button" onClick={onClose}>Voltar ao catálogo</button></div></section></div>;
}

export function LoginModal({ onClose }) {
  const submit = (e) => { e.preventDefault(); alert('Demonstração: o login ainda não está conectado a um servidor.'); onClose(); };
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title"><button className="modal-close" onClick={onClose} aria-label="Fechar"><X /></button><span className="brand-icon large"><Clapperboard size={25} /></span><span className="eyebrow">BEM-VINDO DE VOLTA</span><h2 id="login-title">Entre na MovieCity</h2><p>Guarde seus favoritos e encontre seu próximo filme.</p><form onSubmit={submit}><label>E-mail<input type="email" placeholder="voce@email.com" required /></label><label>Senha<input type="password" placeholder="Sua senha" minLength="4" required /></label><button className="primary-button" type="submit">Entrar na conta</button></form><small>Esta tela é demonstrativa e não armazena seus dados.</small></section></div>;
}
