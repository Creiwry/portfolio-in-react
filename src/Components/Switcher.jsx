import { useState } from 'react';
import useDarkSide from '../CustomHooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="z-[2]">
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={24} />
      </div>
    </>
  );
}
