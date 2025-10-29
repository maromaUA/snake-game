import css from './Button.module.scss';

const Button = ({ type = 'submit', children, handler = null, theme }) => {
  return (
    <button type={type} className={css.button} onClick={handler && handler}>
      {children}
    </button>
  );
};

export default Button;