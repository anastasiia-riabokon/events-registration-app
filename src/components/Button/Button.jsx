const Button = ({children}) => {
  return (
    <button type="submit" className="w-full btn btn-primary">
      {children}
    </button>
  );
};
export default Button;
