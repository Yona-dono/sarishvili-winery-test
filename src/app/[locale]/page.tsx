export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center">
      {/* Logo / Winery name */}
      <h1
        className="text-5xl md:text-7xl font-heading font-semibold tracking-widest text-burgundy uppercase mb-4"
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
      >
        Sarishvili Winery
      </h1>

      <div className="w-24 h-px bg-gold mx-auto my-6" />

      <p
        className="text-xl md:text-2xl font-heading italic text-warm-gray mb-2"
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
      >
        Coming Soon
      </p>

      <p className="text-base text-warm-gray max-w-md mb-10">
        Our website is under construction. In the meantime, follow us on social media or get in touch directly.
      </p>

      {/* Social links */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href="https://www.facebook.com/profile.php?id=100054597752907"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-colors rounded text-sm tracking-wider uppercase font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          Facebook
        </a>

        <a
          href="https://www.instagram.com/sarishvili_winery/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-colors rounded text-sm tracking-wider uppercase font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          Instagram
        </a>
      </div>

      {/* Email */}
      <a
        href="mailto:sarishvili993@gmail.com"
        className="text-gold hover:text-gold-light transition-colors text-sm tracking-wide underline underline-offset-4"
      >
        sarishvili993@gmail.com
      </a>
    </div>
  );
}
