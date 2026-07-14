import {
  Building2,
  Cpu,
  Eye,
  Globe,
  HeartHandshake,
  House,
  Landmark,
  Presentation,
  Scale,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';

/** Iconografia adotada pelo DS: Lucide, stroke 1.5, cor herdada do texto. */
export const ICONS: Record<string, LucideIcon> = {
  users: Users,
  shield: ShieldCheck,
  building: Building2,
  landmark: Landmark,
  house: House,
  scale: Scale,
  heart: HeartHandshake,
  presentation: Presentation,
  cpu: Cpu,
  globe: Globe,
  eye: Eye,
  target: Target,
};

export function SectionIcon({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--accent-text)' }} />;
}
