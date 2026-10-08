"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getBranchFromPath(pathname: string) {
  const match = pathname.match(/^\/branches\/(khajaguda|kokapet|financialdistrict)\/?$/);
  if (!match) return undefined;
  return match[1] === "financialdistrict" ? "Financial District" : match[1][0].toUpperCase() + match[1].slice(1);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.href;
      const branchLocation = getBranchFromPath(window.location.pathname);
      const params = {
        link_url: href,
        ...(branchLocation ? { branch_location: branchLocation } : {}),
      };

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", params);
      } else if (link.hostname === "wa.me") {
        trackEvent("whatsapp_click", params);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
