import aggregatorAbiUrl from "@/assets/abis/aggregator.abi.json";
import ashSwapAggregatorAbiUrl from "@/assets/abis/ashswap-aggregator.abi.json";
import bskFarmAbiUrl from "@/assets/abis/beskar-dao.abi.json";
import dustAbiUrl from "@/assets/abis/dust_sc.abi.json";
import ashSwapFarmAbiUrl from "@/assets/abis/farmclick_ashswap.abi.json";
import hatomParentAbiUrl from "@/assets/abis/hatom_parent.abi.json";
import flipAbiUrl from "@/assets/abis/sc_flip.abi.json";
import { selectedNetwork } from "@/config/network";
import { AbiRegistry, Address } from "@multiversx/sdk-core/out";
import { SmartContractInteraction } from "./calls/transaction";
export { provider } from "./provider";
export const EGLD_VAL = Math.pow(10, 18);

export type WspTypes =
  | "maiarBskExchangeWsp"
  | "wrapEgldpWsp"
  | "wrapEgldpWspShard1"
  | "wrapEgldpWspShard2"
  | "maiarRouterWsp"
  | "bskFarmWsp"
  | "flipWsp"
  | "dustWsp"
  | "hatomParentWsp"
  | "aggregatorWsp"
  | "ashSwapFarmWsp"
  | "ashSwapAggregatorWsp";

export const getInterface = (workspace: WspTypes) => {
  let address = null;
  let abiUrl: any = null;
  let implementsInterfaces = "";
  let simpleAddress = "";

  switch (workspace) {
    case "maiarBskExchangeWsp":
      simpleAddress = selectedNetwork.scAddress.maiarBskSwap;
      address = new Address(simpleAddress);
      break;

    case "wrapEgldpWsp":
      simpleAddress = selectedNetwork.scAddress.wrapEgld;
      address = new Address(simpleAddress);

      break;
    case "wrapEgldpWspShard1":
      simpleAddress = selectedNetwork.scAddress.wrapEgldShar1;
      address = new Address(simpleAddress);

      break;
    case "wrapEgldpWspShard2":
      simpleAddress = selectedNetwork.scAddress.wrapEgldShar2;
      address = new Address(simpleAddress);

      break;
    case "maiarRouterWsp":
      simpleAddress = selectedNetwork.scAddress.maiarRouter;
      address = new Address(simpleAddress);
      break;
    case "bskFarmWsp":
      simpleAddress = selectedNetwork.scAddress.farm;
      address = new Address(simpleAddress);
      abiUrl = bskFarmAbiUrl;
      implementsInterfaces = "Esdtrewards";
      break;
    case "flipWsp":
      simpleAddress = selectedNetwork.scAddress.flip;
      address = new Address(simpleAddress);
      abiUrl = flipAbiUrl;
      implementsInterfaces = "FlipContract";
      break;
    case "dustWsp":
      simpleAddress = selectedNetwork.scAddress.dust;
      address = new Address(simpleAddress);
      abiUrl = dustAbiUrl;
      implementsInterfaces = "DustContract";
      break;
    case "hatomParentWsp":
      simpleAddress = selectedNetwork.scAddress.hatomParent;
      address = new Address(simpleAddress);
      abiUrl = hatomParentAbiUrl;
      implementsInterfaces = "HatomParentContract";
      break;
    case "aggregatorWsp":
      simpleAddress = selectedNetwork.scAddress.aggregator;
      address = new Address(simpleAddress);
      abiUrl = aggregatorAbiUrl;
      implementsInterfaces = "AggregatorContract";
      break;
    case "ashSwapFarmWsp":
      simpleAddress = selectedNetwork.scAddress.ashSwapFarm;
      address = new Address(simpleAddress);
      abiUrl = ashSwapFarmAbiUrl;
      implementsInterfaces = "FarmClickContract";
      break;
    case "ashSwapAggregatorWsp":
      simpleAddress = selectedNetwork.scAddress.ashSwapAggregator;
      address = new Address(simpleAddress);
      abiUrl = ashSwapAggregatorAbiUrl;
      implementsInterfaces = "FarmClickContract";
      break;
    default:
      simpleAddress = workspace;
      address = new Address(simpleAddress);
      break;
  }

  return { address, abiUrl, implementsInterfaces, simpleAddress };
};

export const getSmartContractInteraction = (
  key: WspTypes
): SmartContractInteraction => {
  const smartsContractsInteractions: {
    [key: string]: SmartContractInteraction;
  } = {
    bskFarmWsp: new SmartContractInteraction(
      getInterface("bskFarmWsp").simpleAddress
    ),
    maiarRouterWsp: new SmartContractInteraction(
      getInterface("maiarRouterWsp").simpleAddress
    ),
    wrapEgldpWspShard2: new SmartContractInteraction(
      getInterface("wrapEgldpWspShard2").simpleAddress
    ),
    wrapEgldpWspShard1: new SmartContractInteraction(
      getInterface("wrapEgldpWspShard1").simpleAddress
    ),
    wrapEgldpWsp: new SmartContractInteraction(
      getInterface("wrapEgldpWsp").simpleAddress
    ),
    maiarBskExchangeWsp: new SmartContractInteraction(
      getInterface("maiarBskExchangeWsp").simpleAddress
    ),
    flipWsp: new SmartContractInteraction(
      getInterface("flipWsp").simpleAddress
    ),
    dustWsp: new SmartContractInteraction(
      getInterface("dustWsp").simpleAddress
    ),
    hatomParentWsp: new SmartContractInteraction(
      getInterface("hatomParentWsp").simpleAddress
    ),
    aggregatorWsp: new SmartContractInteraction(
      getInterface("aggregatorWsp").simpleAddress,
      AbiRegistry.create(getInterface("aggregatorWsp").abiUrl)
    ),
    ashSwapFarmWsp: new SmartContractInteraction(
      getInterface("ashSwapFarmWsp").simpleAddress,
      AbiRegistry.create(getInterface("ashSwapFarmWsp").abiUrl)
    ),
    ashSwapAggregatorWsp: new SmartContractInteraction(
      getInterface("ashSwapAggregatorWsp").simpleAddress,
      AbiRegistry.create(getInterface("ashSwapAggregatorWsp").abiUrl)
    ),
  };

  if (smartsContractsInteractions[key]) {
    return smartsContractsInteractions[key];
  } else {
    try {
      new Address(key);
    } catch (error) {
      throw new Error("Invalid address");
    }
    return new SmartContractInteraction(key);
  }
};
