declare module "@vercel/analytics/react" {
  export interface AnalyticsProps {
    beforeSend?: (event: any) => any | null;
    debug?: boolean;
    mode?: "auto" | "development" | "production";
    scriptSrc?: string;
    endpoint?: string;
    dsn?: string;
    framework?: string;
    route?: string | null;
    path?: string | null;
    basePath?: string;
  }

  export function Analytics(props: AnalyticsProps): null;
  export function track(
    name: string,
    properties?: Record<string, any>,
    options?: any,
  ): void;
}
