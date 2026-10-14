import {
  Flask,
  UsersThree,
  Database,
  SlidersHorizontal,
  Stethoscope,
  Fingerprint,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { Service } from "@/data/services";

const map: Record<Service["icon"], PhosphorIcon> = {
  flask: Flask,
  users: UsersThree,
  database: Database,
  sliders: SlidersHorizontal,
  stethoscope: Stethoscope,
  fingerprint: Fingerprint,
  steering: SteeringWheel,
};

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const C = map[name];
  return <C className={className} weight="light" aria-hidden />;
}
