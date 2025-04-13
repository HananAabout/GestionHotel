// LoginPage.jsx
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Images d'arrière-plan (remplacez par vos propres URLs d'images)
  const backgroundImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];

  // Effect pour changer l'image d'arrière-plan toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tentative de connexion avec:', { email, password });
    // Ici vous ajouterez la logique d'authentification
  };

  
  // Styles pour le background changeant
  const mainStyle = {
    backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
    position: 'relative'
  };

  // Overlay sombre pour améliorer la lisibilité du formulaire
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="py-3 bg-white shadow-sm">
       
      </header>
      
      {/* Main Content with changing background */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center" style={mainStyle}>
        <div style={overlayStyle}></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="card shadow" style={{ borderRadius: '10px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div className="card-body p-4 p-md-5">
                  <h1 className="text-center mb-4 fw-bold">Connexion</h1>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email :</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">Mot de passe :</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="d-grid gap-2 mb-3">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        style={{ backgroundColor: '#4a90e2', borderColor: '#4a90e2' }}
                      >
                        Se connecter
                      </button>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="/password" 
                        className="text-decoration-none" 
                        style={{ color: '#4a90e2' }}
                      >
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-3 bg-white border-top">
        <div className="container">
          <p className="text-center text-muted mb-0">© 2025 HotelManager, Tous droits réservés</p>
        </div>
      </footer>

      {/* Préchargement des images pour éviter les scintillements lors des transitions */}
      <div style={{ display: 'none' }}>
        {backgroundImages.map((img, index) => (
          <img key={index} src={img} alt="preload" />
        ))}
      </div>
    </div>
  );
}

export default LoginPage;