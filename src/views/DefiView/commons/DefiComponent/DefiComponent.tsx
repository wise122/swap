"use client";
import Collapse from "@/components/Collapse/Collapse";
import Divider from "@/components/Divider/Divider";
import { Card, CardContent } from "@/components/ui/card";
import useAuthentication from "@/hooks/useAuthentication";
import useDisclosure from "@/hooks/useDisclosure";
import useGetElrondToken from "@/hooks/useGetElrondToken";
import useGetTokenPrice from "@/hooks/useGetTokenPrice";
import {
  IMoneyMarkeTvl,
  IMoneyMarketDeposit,
  IMoneyMarketReward,
} from "@/types/hatom.interface";
import { formatBalanceDollar } from "@/utils/functions/formatBalance";
import { formatTokenI } from "@/utils/functions/tokens";
import Image from "next/image";
import React from "react";
import { useStake } from "../../utils/hooks";
import FarmInfo from "./common/FarmInfo/FarmInfo";
import FarmMainButtons from "./common/FarmMainButtons/FarmMainButtons";
import StakeModal from "./common/Modals/StakeModal";
import StakedInfo from "./common/StakedInfo/StakedInfo";

interface IDefiContext {
  hatomFarm?: IMoneyMarkeTvl;
  userRewards?: IMoneyMarketReward;
  deposits?: IMoneyMarketDeposit[];
}

export const FarmContext = React.createContext<IDefiContext>({
  hatomFarm: undefined,
  userRewards: undefined,
  deposits: [],
});
interface FarmComponentProps {
  hatomFarm: IMoneyMarkeTvl;
  userInfo: {
    userRewards?: IMoneyMarketReward;
    deposits?: IMoneyMarketDeposit[];
  };
}
const FarmComponent = ({ hatomFarm, userInfo }: FarmComponentProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { elrondToken } = useGetElrondToken(hatomFarm.moneyMarket.tokenI);
  const [price] = useGetTokenPrice(hatomFarm.moneyMarket.tokenI);
  const { isOpenStake, onCloseStake } = useStake(
    hatomFarm.moneyMarket.tokenI || ""
  );

  const { isAdmin } = useAuthentication();
  return (
    <FarmContext.Provider
      value={{
        hatomFarm: hatomFarm,
        userRewards: userInfo.userRewards,
        deposits: userInfo.deposits,
      }}
    >
      <Card className="w-full  px-4">
        <CardContent className="space-y-2 pt-6">
          <div
            className="flex gap-5 justify-between items-center cursor-pointer flex-col md:flex-row"
            onClick={onToggle}
          >
            <div className="flex items-center gap-4">
              {elrondToken?.assets?.svgUrl && (
                <div className="w-[50px] h-[50px]">
                  <Image
                    src={elrondToken.assets.svgUrl}
                    alt="hatom"
                    width={50}
                    height={50}
                  />{" "}
                </div>
              )}
              {hatomFarm?.tvl && (
                <div className="flex flex-col gap-5 items-center">
                  <div>
                    <p className="whitespace-nowrap mb-2">
                      {formatTokenI(hatomFarm.moneyMarket.tokenI)} POOL
                    </p>
                  </div>
                </div>
              )}
            </div>
            {isAdmin && (
              <div className="flex flex-col my-5">
                <p className="whitespace-nowrap mb-2">Total Value Locked</p>
                <p className="text-[12px] text-muted-foreground">
                  $
                  {formatBalanceDollar(
                    {
                      balance: hatomFarm.tvl,
                      decimals: elrondToken?.decimals,
                    },
                    price,
                    true
                  )}
                </p>
              </div>
            )}
            <div className="flex items-center gap-7 flex-col md:flex-row flex-1 justify-end">
              <FarmInfo />
              <FarmMainButtons isOpen={isOpen} />
            </div>
          </div>
        </CardContent>
        {isOpenStake && (
          <StakeModal isOpen={isOpenStake} onClose={onCloseStake} />
        )}
        {isOpen && <Divider className="mb-4" />}

        <Collapse isOpen={isOpen}>
          <StakedInfo />
        </Collapse>
      </Card>
    </FarmContext.Provider>
  );
};

export default FarmComponent;
