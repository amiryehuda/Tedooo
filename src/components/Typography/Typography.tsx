import React from "react";
import { colors } from "../../global-style";

interface TypographyProps {
  children: string;
  fontSize?: string;
  textColor?: string;
  fontWeight?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  fontSize = `16px`,
  textColor = colors.black,
  fontWeight = 400,
}) => {
  return (
    <div
      style={{ fontSize: fontSize, color: textColor, fontWeight: fontWeight }}
    >
      {children}
    </div>
  );
};

export default Typography;
