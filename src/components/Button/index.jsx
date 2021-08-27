import './styles.css';

export const Button = ({ text, onClick, disabled, ...rest }) => (
  <button 
    {...rest}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);