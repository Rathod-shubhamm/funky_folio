import Image from "next/image";

export default function HeroAvatar() {
  return (
    <div className="hero-avatar" aria-hidden="true">
      <Image
        className="hero-avatar-image"
        src="/avatar.png"
        alt=""
        width={1086}
        height={1012}
        priority
        sizes="(max-width: 768px) 112vw, (max-width: 1024px) 86vw, 58vw"
      />
    </div>
  );
}
