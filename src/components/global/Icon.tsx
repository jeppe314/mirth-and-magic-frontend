import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

type IconSets = 'Fa' | 'Gi';
type IconProps = {
  name: string;
  category?: IconSets;
  size?: string | number;
  classes?: string;
};

const Icon: React.FC<IconProps> = ({ name, category = 'Fa', size = '1em', classes = 'text-primary' }) => {
  let IconComponent;

  switch (category) {
    case 'Fa':
      IconComponent = FaIcons[name];
      break;
    case 'Gi':
      IconComponent = GiIcons[name];
      break;
    default:
      console.error(`Icon category ${category} not supported.`);
      return null;
  }

  if (!IconComponent) {
    console.error(`Icon ${name} not found in category ${category}.`);
    return null;
  }

  return <IconComponent size={size} className={classes} />;
};

export default Icon;
