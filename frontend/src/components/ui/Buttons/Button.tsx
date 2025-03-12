import { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  content: string;
}

const Button: FC<ButtonProps> = ({onClick, content}) => {
  return (
    <button onClick={onClick}>{content}</button>
  )
}

export default Button;