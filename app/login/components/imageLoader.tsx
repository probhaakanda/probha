import { useState, ReactNode, CSSProperties } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  loader: ReactNode;
  height: number;
  width: number;
  style?: CSSProperties;
}

const ImageWithLoader = ({
  src,
  alt,
  loader,
  height,
  width,
  style,
}: ImageWithLoaderProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && loader}
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        onLoad={() => setLoading(false)}
        style={loading ? { display: "none" } : style}
      />
    </div>
  );
};

export default ImageWithLoader;
