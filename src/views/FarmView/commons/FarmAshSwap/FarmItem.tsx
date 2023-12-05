import Collapse from "@/components/Collapse/Collapse";
import Divider from "@/components/Divider/Divider";
import { LpTokenImageV2 } from "@/components/LpTokenImage/LpTokenImage";
import { Card, CardContent } from "@/components/ui/card";
import { selectedNetwork } from "@/config/network";
import useDisclosure from "@/hooks/useDisclosure";
import useGetElrondToken from "@/hooks/useGetElrondToken";
import useGetTokenPrice from "@/hooks/useGetTokenPrice";
import { formatBalanceDollar } from "@/utils/functions/formatBalance";
import {
  useGetAshSwapFarms,
  useGetFarmsInfo,
} from "@/views/FarmView/commons/FarmAshSwap/utils/hooks";
import Link from "next/link";
import FarmInfo from "./common/FarmInfo/FarmInfo";
import FarmMainButtons from "./common/FarmMainButtons/FarmMainButtons";
import StakedInfo from "./common/StakedInfo/StakedInfo";
import { createContext, useContext } from "react";
import { IAshFarm } from "@/types/farm.interface";
import { AshFarmContext } from "./FarmAshSwap";
import { formatTokenI } from "@/utils/functions/tokens";

const FarmItem = () => {
  const { farm } = useContext(AshFarmContext);

  const lpTokenIdentifier = farm?.lp_token_id || "";

  const { elrondToken } = useGetElrondToken(lpTokenIdentifier);

  const [price] = useGetTokenPrice(lpTokenIdentifier);

  const { isOpen, onToggle } = useDisclosure();

  if (!farm) return null;

  return (
    <Card className="w-full mt-10 px-4 pb-5">
      <CardContent className="space-y-2 pt-6">
        <div
          className="flex justify-between items-center cursor-pointer flex-col sm:flex-row"
          onClick={onToggle}
        >
          <div className="flex items-center gap-4">
            <LpTokenImageV2 lpToken={elrondToken} size={40} />
            {farm && (
              <div className="flex flex-col ">
                <p className="whitespace-nowrap mb-2">
                  {formatTokenI(farm.first_token_id)}-
                  {formatTokenI(farm.second_token_id)}
                </p>
                <p className="text-[12px] text-muted-foreground">
                  $
                  {formatBalanceDollar(
                    { balance: farm.total_deposited_amount, decimals: 18 },
                    price,
                    true
                  )}
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-7 flex-col sm:flex-row flex-1 justify-end">
            <FarmInfo />
            <FarmMainButtons isOpen={isOpen} />
          </div>
        </div>
      </CardContent>
      {isOpen && <Divider className="mb-4" />}

      <Collapse isOpen={isOpen}>
        <StakedInfo />
      </Collapse>
    </Card>
  );
};

export default FarmItem;
