import path from "path";
import webpack from "webpack";
import {
  buildWebpack,
  IBuildPaths,
  TBuildMode,
  TBuildPlatform,
} from "@packages/build-config";
import packageJson from "./package.json";

interface IEnvVariables {
  mode?: TBuildMode;
  port?: number;
  platform?: TBuildPlatform;
  analyzer?: boolean;
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
  };

  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? "http://localhost:3001";
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? "http://localhost:3002";

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    platform: env.platform ?? "desktop",
    analyzer: env.analyzer,
  });

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
        admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
      },
      exposes: {
        "./Router": "./src/router/Router.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    }),
  );

  return config;
};
