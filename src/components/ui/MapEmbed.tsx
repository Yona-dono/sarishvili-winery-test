interface MapEmbedProps {
  title: string;
  embedUrl?: string;
}

export default function MapEmbed({ title, embedUrl }: MapEmbedProps) {
  const url =
    embedUrl ||
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11934.91!2d42.045!3d41.987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU5JzEzLjIiTiA0MsKwMDInNDIuMCJF!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge';

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        aria-label={title}
      />
    </div>
  );
}
