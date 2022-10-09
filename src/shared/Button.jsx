const Button = ({ children, version, style }) => (
  <button
    className={`text-base font-semibold capitalize hover:opacity-80 ${
      version
        ? "bg-Cyan text-white rounded-full py-2 px-4"
        : "bg-transparent text-GrayishViolet"
    } ${style}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  version: false,
};

export default Button;
