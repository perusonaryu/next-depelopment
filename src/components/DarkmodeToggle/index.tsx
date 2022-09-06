import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export const DarkModeToggle = ()  =>  {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      className='absolute top-[25%] right-4 xs:static ml-4'
      size={34}
    >
      {dark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
    </ActionIcon>
  );
}