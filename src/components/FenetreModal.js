import React from 'react'
import '../Modal.css'; // Assurez-vous de créer un fichier CSS pour les styles
import { CSSTransition } from 'react-transition-group';

const FenetreModal = ({ show, onClose }) => {
    // modal normal
  /* if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Contenu de la modale</h2>
        <p>Ceci est une fenêtre modale simple.</p>
      </div>
    </div>
  ); */

  // modal animé
    return (
      <CSSTransition
        in={show}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>X</button>
            <h2>Contenu de la modale</h2>
            <p>Ceci est une fenêtre modale avec animation.</p>
          </div>
        </div>
      </CSSTransition>
    );
  };


export default FenetreModal;