const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '../resources/images/icon');
const OUTPUT_DIR = path.resolve(__dirname, '../resources/js/components/icons');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function toPascalCase(str) {
  return str
    .replace(/[-_]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^([a-z])/, (_, c) => c.toUpperCase());
}

fs.readdirSync(ICONS_DIR).forEach(file => {
  if (!file.endsWith('.svg')) return;
  const content = fs.readFileSync(path.join(ICONS_DIR, file), 'utf8');
  const baseName = path.basename(file, '.svg');
  const componentName = toPascalCase(baseName) + 'Icon';
  const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  const innerMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
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
});
