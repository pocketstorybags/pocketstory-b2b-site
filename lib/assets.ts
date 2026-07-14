const R2_BASE = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");

export function assetUrl(localPath: string): string {
  if (!R2_BASE) return localPath;
  const normalized = localPath.replace(/^\//, "");
  return `${R2_BASE}/${normalized}`;
}
