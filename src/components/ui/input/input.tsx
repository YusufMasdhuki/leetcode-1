import type { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  return <input type="text" {...props} />;
};

export default Input;
