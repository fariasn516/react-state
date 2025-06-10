import { useState } from 'react';

export default function Toggle() {
  const [timeToggle, setTimeToggle] = useState(false)
  const onToggle = () => setTimeToggle(!timeToggle)
  const onDay = () => setTimeToggle(true)
  const onNight = () => setTimeToggle(false)

  return (
    <div className="App">
      <h2>Toggle</h2>
      <div className="emoji">{timeToggle ? '💡': '🌌'}</div>
      <div className="button-group">
        <button onClick={onDay}>Day</button>
        <button onClick={onNight}>Night</button>
        <button onClick={onToggle}>Toggle</button>
      </div>
    </div>
  )
}
