import './styles.css';

export const TextInput = ({ inputValue, actionFn }) => (
  <input
    className="text-input"
    type="search"
    onChange={actionFn}
    defaultValue={inputValue}
    placeholder="Digite sua pesquisa"
  />
);