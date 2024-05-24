import { useEffect } from 'react';
import css from './Modal.module.scss';
import { changeGameOver } from '../../Redux/game/operations';
import { store } from '../../Redux/store';
import startNewGame from '../../Functions/startNewGame';

const Modal = ({ children }) => {
  useEffect(() => {
    document.addEventListener('keydown', onCloseEscape);
    return () => {
      document.removeEventListener('keydown', onCloseEscape);
    };
  });

  
  const handleOnClick = () => {
    startNewGame();
  };
  // const handleBackDropClick = e => {
  //   e.currentTarget === e.target && startNewGame()
  // };
  const onCloseEscape = e => {
    e.code === 'Escape' && startNewGame();
  };
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;