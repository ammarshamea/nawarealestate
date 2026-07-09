import { publicPath } from "@/lib/publicPath";

interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function BrandImage({
  src,
  alt,
  className = "",
  priority = false,
  loading,
}: BrandImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={publicPath(src)}
      alt={alt}
      className={className}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
