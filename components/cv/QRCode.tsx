import { QRCodeSVG } from 'qrcode.react';

type Props = {
  value: string;
  label: string;
  size?: number;
};

export function QRCode({ value, label, size = 64 }: Props) {
  return (
    <div className="flex flex-col items-center gap-1">
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="transparent"
        fgColor="#1a1a1a"
        level="M"
      />
      <span style={{ fontSize: '8px', color: '#555', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  );
}
