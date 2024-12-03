import '../styles/input.css';

export function Input({ name, type, value, onChange }) {
  return (
    <div>
      <div className="input-label">
        <label htmlFor={name}>{name}:</label>
        <input type={type} id={name} value={value} onChange={onChange} />
      </div>
    </div>
  );
}
