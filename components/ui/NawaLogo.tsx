interface Props {
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function NawaLogo({ height = 52, className = "", style = {} }: Props) {
  const width = Math.round(height * (3071.73 / 2933.13));
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/nawa_logo.svg`}
      alt="Nawah Real Estate Development — نواة التطوير العقاري"
      width={width}
      height={height}
      className={className}
      style={{ display: "block", objectFit: "contain", ...style }}
      draggable={false}
    />
  );
}
