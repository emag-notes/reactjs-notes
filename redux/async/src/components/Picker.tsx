import * as React from 'react';

interface Props {
  options: string[];
  value: string;
  onChange: (reddit: string) => void;
}

const Picker = ({value, onChange, options}: Props) => {
  return (
    <span>
    <h1>{value}</h1>
    <select
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      {options.map((o: string) =>
        <option value={o} key={o}>
          {o}
        </option>
      )}
    </select>
  </span>
  );
};

export default Picker;
