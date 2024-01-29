"use client";
import Image from "next/image";
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import NavigationMenuDemo from "./header/page";
import { ChevronDown, LucideChevronDown } from "lucide-react";

export default function Home() {

  return (
    <main>
      <div>
        home page
      </div>
    </main>
  );
}
