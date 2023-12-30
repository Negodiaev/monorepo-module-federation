export interface IBuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type TBuildMode = "development" | "production";
export type TBuildPlatform = "mobile" | "desktop";

export interface IBuildOptions {
  port: number;
  paths: IBuildPaths;
  mode: TBuildMode;
  platform: TBuildPlatform;
  analyzer?: boolean;
}
