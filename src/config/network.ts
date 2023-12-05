export type ENVIROMENTTYPE = "testnet" | "mainnet" | "devnet";

const networkConfig = {
  mainnet: {
    network: {
      id: "mainnet",
      name: "Mainnet",
      egldLabel: "EGLD",
      walletAddress: "https://wallet.multiversx.com",
      apiAddress:
        process.env.NEXT_PUBLIC_ELROND_API || "https://api.multiversx.com",
      gatewayAddress: "https://gateway.multiversx.com",
      explorerAddress: "http://explorer.multiversx.com",
      graphQlAddress: "https://exchange-graph.multiversx.com/graphql",
      apiTimeout: 10000,
      walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
    },
    ChainID: "1",
    tokensID: {
      egld: "EGLD",
      wegld: "WEGLD-bd4d79",
      bsk: "BSK-baa025",
      ride: "RIDE-7d18e9",
      hodl: "HODL-d7f4b5",
      usdc: "USDC-c76f1f",
      rare: "RARE-99e8b0",
      bskwegld: "BSKWEGLD-7cd373",
      mex: "MEX-455c57",
      lkmex: "LKMEX-aab910",
      sProteo: "SPROTEO-c2dffe",

      proteoEgldLp: "PROTEOEGLD-baf054",
      zpay: "ZPAY-247875",
      zpayWegldLp: "ZPAYWEGLD-34e5c1",
      aero: "AERO-458bbf",
      aerowegld: "AEROWEGLD-81cc37",
      proteo: "PROTEO-0c7311",
      crt: "CRT-52decf",
      koson: "KOSON-5dd4fa",

      rareUsdcLp: "RAREUSDC-e4a7f8",
      prick: "PRICK-744592",
      bear: "BEAR-f9c271",
      kro: "KRO-df97ec",
      estar: "ESTAR-461bab",
      jex: "JEX-9040ca",
      epunks: "EPUNKS-dc0f59",
      cyberwegld: "CYBERWEGLD-45a866",
      cyber: "CYBER-489c1c",
      bonez: "BONEZ-ff9a73",
      hype: "HYPE-619661",
      usdt: "USDT-f8c08c",
      busd: "BUSD-40b57e",
      hypeusdc: "HYPEUSDC-3164e5",
    },

    scAddress: {
      maiarRouter:
        "erd1qqqqqqqqqqqqqpgqq66xk9gfr4esuhem3jru86wg5hvp33a62jps2fy57p",
      maiarBskSwap:
        "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
      wrapEgld:
        "erd1qqqqqqqqqqqqqpgqvc7gdl0p4s97guh498wgz75k8sav6sjfjlwqh679jy",
      wrapEgldShar1:
        "erd1qqqqqqqqqqqqqpgqhe8t5jewej70zupmh44jurgn29psua5l2jps3ntjj3",
      wrapEgldShar2:
        "erd1qqqqqqqqqqqqqpgqmuk0q2saj0mgutxm4teywre6dl8wqf58xamqdrukln",
      farm: "erd1qqqqqqqqqqqqqpgqhj8um6tv2ul6u2epd2ca4c6z5v4xt9v5pwkq9cdazl",
      flip: "erd1qqqqqqqqqqqqqpgqcg2ay4qhs9g5p9sc550hau5hn9tcul9my26szpd2jn",
      dust: "erd1qqqqqqqqqqqqqpgql3z822nsknxsjttzqs73762u4vltlgfvy26srl0844",
      hatomParent:
        "erd1qqqqqqqqqqqqqpgq9mpe7jf74uzggju8mrqjrfmnl0p04n7ny26sk4spwh",
      aggregator:
        "erd1qqqqqqqqqqqqqpgqcc69ts8409p3h77q5chsaqz57y6hugvc4fvs64k74v",

      ashSwapFarm: "",
      ashSwapAggregator:
        "erd1qqqqqqqqqqqqqpgqcc69ts8409p3h77q5chsaqz57y6hugvc4fvs64k74v",
    },
  },
  devnet: {
    network: {
      id: "devnet",
      name: "Devnet",
      egldLabel: "xEGLD",
      walletAddress: "https://devnet-wallet.multiversx.com",
      apiAddress:
        process.env.NEXT_PUBLIC_ELROND_API ||
        "https://devnet-api.multiversx.com",
      gatewayAddress: "https://devnet-gateway.multiversx.com",
      explorerAddress: "http://devnet-explorer.multiversx.com",
      graphQlAddress: "https://devnet-exchange-graph.multiversx.com/graphql",
      apiTimeout: 10000,
      walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
    },
    ChainID: "D",
    tokensID: {
      egld: "EGLD",
      wegld: "WEGLD-d7c6bb",
      bsk: "BSK-207198",

      ride: "RIDE-6e4c49",
      hodl: "",
      usdc: "USDC-8d4068",
      rare: "RIDE-6e4c49",
      bskwegld: "",
      usdt: "USDT-188935",
      busd: "BUSD-632f7d",
    },
    scAddress: {
      maiarRouter: "",
      maiarBskSwap: "",
      wrapEgld:
        "erd1qqqqqqqqqqqqqpgqfj3z3k4vlq7dc2928rxez0uhhlq46s6p4mtqerlxhc",
      wrapEgldShar1:
        "erd1qqqqqqqqqqqqqpgqfj3z3k4vlq7dc2928rxez0uhhlq46s6p4mtqerlxhc",
      wrapEgldShar2:
        "erd1qqqqqqqqqqqqqpgqfj3z3k4vlq7dc2928rxez0uhhlq46s6p4mtqerlxhc",
      farm: "",
      flip: "erd1qqqqqqqqqqqqqpgqfg6t4tr5vj70359kws6nltkw7qfv8rv8d8ssj43k4j",
      dust: "erd1qqqqqqqqqqqqqpgq375pvn7af4k2tv34mshm80pqjs0uhl82d8ssdv4qpj",
      hatomParent:
        "erd1qqqqqqqqqqqqqpgq5fldcnkg7j5333h7u4n8xhewt0pjj76qvr2s0lcyyl",
      aggregator:
        "erd1qqqqqqqqqqqqqpgqza440n5lu0x4ych736putfv0ppjgs8jevr2s5scvyq",
      ashSwapFarm:
        "erd1qqqqqqqqqqqqqpgqct2vdncdw5jrnw9t33k0z0qs9cjcp4y7vr2szde39g",
    },
  },
  testnet: {
    network: {
      id: "testnet",
      name: "Testnet",
      egldLabel: "xEGLD",
      walletAddress: "https://testnet-wallet.multiversx.com",
      apiAddress:
        process.env.NEXT_PUBLIC_ELROND_API ||
        "https://testnet-api.multiversx.com",
      gatewayAddress: "https://testnet-gateway.multiversx.com",
      explorerAddress: "http://testnet-explorer.multiversx.com",
      graphQlAddress: "https://testnet-exchange-graph.multiversx.com/graphql",
      apiTimeout: 10000,
      walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
    },
    ChainID: "T",
    tokensID: {
      egld: "EGLD",
      wegld: "WEGLD-d7c6bb",
      bsk: "TEST-311344",

      ride: "RIDE-6e4c49",
      hodl: "",
      usdc: "USDC-8d4068",
      rare: "RIDE-6e4c49",
      bskwegld: "",
      usdt: "USDT-188935",
      busd: "BUSD-632f7d",
    },
    scAddress: {
      maiarRouter: "",
      maiarBskSwap: "",
      wrapEgld:
        "erd1qqqqqqqqqqqqqpgqfj3z3k4vlq7dc2928rxez0uhhlq46s6p4mtqerlxhc",
      wrapEgldShar1:
        "erd1qqqqqqqqqqqqqpgqfj3z3k4vlq7dc2928rxez0uhhlq46s6p4mtqerlxhc",
      wrapEgldShar2:
        "erd1qqqqqqqqqqqqqpgqfj3z3k4vlq7dc2928rxez0uhhlq46s6p4mtqerlxhc",
      farm: "",
      flip: "erd1qqqqqqqqqqqqqpgqfg6t4tr5vj70359kws6nltkw7qfv8rv8d8ssj43k4j",
      dust: "erd1qqqqqqqqqqqqqpgq375pvn7af4k2tv34mshm80pqjs0uhl82d8ssdv4qpj",
      hatomParent:
        "erd1qqqqqqqqqqqqqpgq5fldcnkg7j5333h7u4n8xhewt0pjj76qvr2s0lcyyl",
      aggregator:
        "erd1qqqqqqqqqqqqqpgqza440n5lu0x4ych736putfv0ppjgs8jevr2s5scvyq",
    },
  },
};
export const ENVIROMENT: ENVIROMENTTYPE = "mainnet";

export const selectedNetwork = networkConfig[ENVIROMENT];
