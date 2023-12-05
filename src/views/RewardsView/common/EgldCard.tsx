import MyTooltip from "@/components/ui-system/Tooltip/Tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { selectedNetwork } from "@/config/network";
import useGetAccountToken from "@/hooks/useGetAccountToken";
import {
  formatBalance,
  formatBalanceDollar,
} from "@/utils/functions/formatBalance";
import { useGetEgldPrice } from "@multiversx/sdk-dapp/hooks";
const EgldCard = () => {
  const { accountToken } = useGetAccountToken(selectedNetwork.tokensID.egld);
  const { price } = useGetEgldPrice();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">EGLD holdings</CardTitle>
        <MyTooltip content="Wrap or unwrap your egld">
          <Button size={"icon"} variant={"outline"}>
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-muted-foreground"
            >
              <rect
                width="300"
                height="300"
                rx="150"
                fill="none"
                id="egld-token"
              ></rect>
              <path
                d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z"
                fill="currentColor"
              ></path>
            </svg>
          </Button>
        </MyTooltip>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {formatBalance(accountToken)} EGLD
        </div>
        <p className="text-xs text-muted-foreground">
          ${formatBalanceDollar(accountToken, price || 0)}
        </p>
      </CardContent>
    </Card>
  );
};

export default EgldCard;
