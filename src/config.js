// build checker
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const APP_NAME = "dynamic-multimedia-challenge";

export const REPOSITORY =
  "https://github.com/Uhmopt/dynamic-multimedia-challenge-ui";
export const REPOSITORY_API =
  "https://github.com/Uhmopt/dynamic-multimedia-challenge-api";

export const GITHUB = "https://github.com/Uhmopt";
export const GITHUB_NAME = "Uhmopt";

export const API_BASE = IS_DEVELOPMENT ? "http://localhost:5000" : "";
