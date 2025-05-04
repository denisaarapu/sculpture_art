import { FC } from "react";

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  textColor?: string;
  accentColor?: string;
}

const Logo: FC<LogoProps> = ({ 
  size = 'medium',
  textColor = 'text-primary',
  accentColor = 'text-accent'
}) => {
  const sizeClasses = {
    small: "h-6 ml-2 text-base",
    medium: "h-8 ml-2 text-lg",
    large: "h-10 ml-3 text-xl"
  };

  return (
    <div className="flex items-center">
      <svg 
        className={`${sizeClasses[size]} w-auto`} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M85 30L70 15H30L15 30V70L30 85H70L85 70V30Z" 
          stroke="currentColor" 
          strokeWidth="5" 
          className={accentColor}
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M40 30V70M60 30V70M30 50H70" 
          stroke="currentColor" 
          strokeWidth="5" 
          className={accentColor}
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className={`${sizeClasses[size]} font-heading font-semibold ${textColor}`}>
        Sculpture
        <span className={accentColor}>Gallery</span>
      </span>
    </div>
  );
};

export default Logo;
