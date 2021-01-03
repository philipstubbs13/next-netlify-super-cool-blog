// @ts-nocheck

const Radio = ({ name, value, checked, handleChange, label }) => {
  return (
    <div className="custom-radio d-inline-block mr-10">
      <input type="radio" name={name} id={value} value={value} onChange={handleChange} checked={checked} />
      <label htmlFor={value}>{label}</label>
    </div>
  )
}

export default Radio;