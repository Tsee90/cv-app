export function TextArea({ name, rows, cols, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name}:</label>
      <textarea
        id={name}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
