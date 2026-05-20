import './Button.css';

function Button({ children, variant = 'primary', size = 'md', ...props }) {
  return (
    <button className="cw-button" {...props}>
      {children}
    </button>
  );
}

export default Button;
 
