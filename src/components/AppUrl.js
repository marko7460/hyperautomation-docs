import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function AppUrl() {
  const { siteConfig } = useDocusaurusContext();
  return <>{siteConfig.customFields.appUrl}</>;
}

export function ProjectID() {
  const { siteConfig } = useDocusaurusContext();
  return <>{siteConfig.customFields.projectID}</>;
}

export default AppUrl;
