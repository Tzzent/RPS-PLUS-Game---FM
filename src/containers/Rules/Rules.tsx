import './Rules.scss';
import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

interface Iprops {
  isRulesOpen: boolean,
  setIsRulesOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Rules = ({ isRulesOpen, setIsRulesOpen }: Iprops) => {

  const { mode } = useParams();

  const rulesModal = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (rulesModal.current && rulesModal.current.contains(event.target as Node)) {
      setIsRulesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);


  return (
    <div className='modal' ref={rulesModal} >
      {
        isRulesOpen && createPortal(
          <div className="rules__container">
            <h1>RULES</h1>
            <img src={mode == 'normal' ? '/images/image-rules.svg' : '/images/image-rules-bonus.svg'} alt="" />
            <button onClick={() => setIsRulesOpen(false)}></button>
          </div>,
          document.body
        )
      }
    </div >
  );
};

export default Rules;