// import {
//   DustIcon,
//   FarmIcon,
//   FireIcon,
//   PlayIcon,
//   SwapIcon,
// } from "components/icons/ui-icons";
// import Layout from "components/Layout/MainLayout";
// import React from "react";
// import { RouteObject } from "react-router-dom";

import { SwapIcon } from "@/components/ui-system/icons/ui-icons";
import { Table2 } from "lucide-react";

// const SwapView = React.lazy(() => import("views/SwapView"));
// const PlayView = React.lazy(() => import("views/PlayView"));
// const TheForgeView = React.lazy(() => import("views/TheForgeView"));
// const SwapLpTab = React.lazy(() => import("views/SwapView/commons/SwapLpTab"));
// const FarmView = React.lazy(() => import("views/FarmView"));
// const CoinFlipView = React.lazy(() => import("views/CoinFlipView"));
// const SwapTab = React.lazy(() => import("views/SwapView/commons/SwapCard"));
// const DustView = React.lazy(() => import("views/DustView/DustView"));

export const routeNames = {
  home: "/multiversx/rewards",
  rewards: "/multiversx/rewards",
  swap: "/swap",
  swapLp: "/swapLp",

  // play: "/play",
  // coinFlip: "/play/coin-flip",
  // forge: "/the-forge",
  farm: "/multiversx/farm",
  stake: "/multiversx/stake",
  play: "/multiversx/play",
  dust: "/multiversx/dust",
  aggregator: "/multiversx/aggregator",
  defi: "/multiversx/defi",
  docs: "/docs",
  blog: "/blog",
  admin: "/admin",
  // upgrade: "/multiversx/upgrade",

  assets: "/dapfy-assets.zip",
  // internals
  about: "/about",
  sustainability: "/sustainability",
  sales: "/sales",
  security: "/security",
  terms: "/terms-of-use",
  openSource: "/open-source",
};

export const externnalLinks = {
  twitter: "https://twitter.com/DapfyCom",
  telegram: "https://t.me/dapfydotcom",
  github: "https://github.com/dapfycom",
  instagram: "https://www.instagram.com/dapfycom/",
  facebook: "https://www.facebook.com/profile.php?id=61553057430791",
  linkedin: "https://www.linkedin.com/in/dapfy-com-8b5428299/",
  youtube: "https://www.youtube.com/@DapfyCom",
  tiktok: "https://www.tiktok.com/@dapfy.com?_t=8hktnFd9Ha3&_r=1",
  analitics: "https://plausible.io/dapfy.com",
};

export const mainSiteRoutes = [
  {
    path: routeNames.rewards,
    title: "Rewards",
  },
  {
    path: routeNames.aggregator,
    title: "Swap",
  },
  {
    path: routeNames.defi,
    title: "Defi",
  },

  {
    path: routeNames.farm,
    title: "Farm",
  },

  {
    path: routeNames.dust,
    title: "Dust",
  },
  {
    path: routeNames.play,
    title: "Other",
    soon: false,
  },

  {
    title: "The Forge",
    soon: true,
  },
  {
    title: "Admin",
    path: routeNames.admin,
    onlyAdmin: true,
  },
];

export const adminRoutes = [
  {
    path: routeNames.admin,
    title: "Rewards",
    icon: <Table2 />,
  },
  {
    path: routeNames.admin + "/aggregator",
    title: "Aggregator",
    icon: <SwapIcon />,
  },
];
