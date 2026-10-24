import * as fs from 'fs';
import * as path from 'path';

const ICONS_DIR = path.resolve(__dirname, '../resources/images/icon');
const OUTPUT_DIR = path.resolve(__dirname, '../resources/js/components/icons');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function toPascalCase(str: string): string {
  return str
    .replace(/[-_]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^([a-z])/, (_, char) => char.toUpperCase());
}

function generateComponent(fileName: string, svgContent: string) {
  const baseName = path.basename(fileName, '.svg');
  const componentName = toPascalCase(baseName) + 'Icon';

  // Extract viewBox if present
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract inner markup (between <svg ...> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  const inner = innerMatch ? innerMatch[1].trim() : '';

  const component = `import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

export const ${componentName}: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="${viewBox}"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${inner}
  </svg>
);
`;

  const outPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
  fs.writeFileSync(outPath, component, 'utf8');
  console.log(`Generated ${componentName}`);
}

fs.readdirSync(ICONS_DIR).forEach(file => {
  if (file.endsWith('.svg')) {
    const fullPath = path.join(ICONS_DIR, file);
    const svg = fs.readFileSync(fullPath, 'utf8');
    generateComponent(file, svg);
  }
});
