import React from 'react'


type TypeSize = "small" | "medium" | "large";
type TypeColor = "primary" | "secondary";


interface ButtonProps {
  size: TypeSize;
  color: TypeColor;
  title: string;
  onClick?: () => void;
  children?: React.JSX.Element;
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
  const { size, color, title, onClick, type = 'button' } = props;
  const defaultClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";
  const classes = {
    colors: {
      primary: {
        button: "bg-amber-700",
        text: "text-red",
      },
      secondary: {
        button: "bg-red-500",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] font-sm",
      medium: "rounded-[14px] font-base",
      large: "rounded-[16px] font-base min-h-[56px]",
    },
  };
  return (
    <button
      type={type}
      className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <span className={classes.colors[color].text}>{title}</span>
    </button>
  );
};

export default Button;