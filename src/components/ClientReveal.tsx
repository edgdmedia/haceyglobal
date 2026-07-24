"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";

interface ClientRevealProps {
  children: React.ReactNode;
}

export function ClientReveal({ children }: ClientRevealProps) {
  useReveal();
  return <>{children}</>;
}
