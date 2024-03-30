import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import Image from 'next/image';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

export default function ThemeSwitch() {
 const { setTheme, resolvedTheme } = useTheme();

 // This function toggles the theme between light and dark
 const handleThemeChange = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
 };

 // The Switch component's onClick event should call handleThemeChange
 return (
    <>
      <Switch
        onClick={handleThemeChange}
        defaultSelected={resolvedTheme === 'dark'}
        size="md"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      >        
      </Switch>
    </>
 );
}
