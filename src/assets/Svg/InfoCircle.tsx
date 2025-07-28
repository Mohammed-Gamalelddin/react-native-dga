import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

interface InfoCircleProps extends SvgProps {
  color?: string;
}

const InfoCircle: React.FC<InfoCircleProps> = ({
  color = '#384250',
  ...props
}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_11213_154284)">
      <Path
        d="M12.0002 14.6666V12M12.0002 9.33331H12.0068M18.6668 12C18.6668 15.6819 15.6821 18.6666 12.0002 18.6666C8.31826 18.6666 5.3335 15.6819 5.3335 12C5.3335 8.31808 8.31826 5.33331 12.0002 5.33331C15.6821 5.33331 18.6668 8.31808 18.6668 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_11213_154284">
        <Rect width={16} height={16} fill="white" transform="translate(4 4)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InfoCircle;
