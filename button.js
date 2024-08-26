import PropTypes from "prop-types";

const Button = ({ className = "" }) => {
  return (
    <div
      className={`rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-yellow flex flex-row items-center justify-center pt-[7px] px-4 pb-2 whitespace-nowrap text-left text-sm text-secondary-text font-captions ${className}`}
    >
      <div className="relative tracking-[0.01em]">in den Warenkorb</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
