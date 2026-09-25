import { siDiscord, siGithub, siInstagram, type SimpleIcon } from "simple-icons";

// Marken-Icons aus Simple Icons (CC0) als Inline-SVG – kein externes Laden
function Brand({ icon, className = "icon" }: { icon: SimpleIcon; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  );
}

export const GithubIcon = () => <Brand icon={siGithub} />;
export const DiscordIcon = () => <Brand icon={siDiscord} />;
export const InstagramIcon = () => <Brand icon={siInstagram} />;
