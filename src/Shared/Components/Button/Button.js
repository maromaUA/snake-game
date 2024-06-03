import css from './Button.module.scss';

const Button = ({ type = 'submit', children, theme }) => {
  return (
    <button type={type} className={css.button}>
      {children}
    </button>
  );
};

export default Button;