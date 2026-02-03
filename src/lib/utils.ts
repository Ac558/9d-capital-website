const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}
