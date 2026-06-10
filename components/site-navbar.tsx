"use client";

import {
  Home,
  User,
  Briefcase,
  Trophy,
  Wrench,
  Mail,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useLanguage } from "@/lib/i18n/language-context";

export function SiteNavbar() {
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.home, url: "#home", icon: Home },
    { name: t.nav.about, url: "#about", icon: User },
    { name: t.nav.projects, url: "#projects", icon: Briefcase },
    { name: t.nav.awards, url: "#awards", icon: Trophy },
    { name: t.nav.skills, url: "#skills", icon: Wrench },
    { name: t.nav.contact, url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
