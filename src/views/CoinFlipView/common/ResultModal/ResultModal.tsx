import Realistic from "@/components/Conffeti/Realistic";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useGetTransactionByHash from "@/hooks/useGetTransactionByHash";
import {
  Base64toString,
  convertToBoolean,
  extractStringsBetweenAts,
} from "@/utils/functions/sc";
import { setHouseSelectionSide } from "@/views/CoinFlipView/lib/con-flip-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectChoise } from "../../lib/functions";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  txHash: string;
}

const ResultModal = ({ isOpen, onClose, txHash }: IProps) => {
  const { transaction, isLoading } = useGetTransactionByHash(txHash);
  const [userSelection, setUserSelection] = useState(false);
  const [coinSelection, setCoinSelection] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (transaction?.status !== "pending") {
      if (transaction?.results) {
        const flipResult = transaction.results.find((result) =>
          Base64toString(result.data).startsWith("@00")
        )?.data;
        if (
          flipResult &&
          transaction.action.arguments.functionArgs.length === 1
        ) {
          const gameReultsStr = Base64toString(flipResult);

          const gameReultsArr = extractStringsBetweenAts(gameReultsStr);

          const userChoiseStr = transaction.action.arguments.functionArgs[0];
          const systemChoiseStr = gameReultsArr[1];

          setUserSelection(convertToBoolean(userChoiseStr));
          setCoinSelection(convertToBoolean(systemChoiseStr));
          dispatch(setHouseSelectionSide(convertToBoolean(systemChoiseStr)));
          setIsReady(true);
        }
      }
    }
  }, [
    dispatch,
    transaction?.action.arguments.functionArgs,
    transaction?.results,
    transaction?.status,
  ]);

  const handleClose = () => {
    setIsReady(false);
    onClose();
  };

  const userWin = userSelection === coinSelection;
  return (
    <>
      {transaction && isReady && userWin && <Realistic />}

      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Coin Flip Reveal</DialogTitle>
          </DialogHeader>

          {isLoading ? (
            <div className="flex items-center justify-center h-72 w-full">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            </div>
          ) : (
            transaction &&
            isReady && (
              <div className="flex flex-col items-center justify-center w-full mt-4">
                <div className="text-lg font-semibold mb-8 text-primary">
                  Your Choice
                </div>
                <div className="text-xl font-semibold mb-8 text-primary">
                  {selectChoise(userSelection)}
                </div>
                <hr className="border-gray-300 w-full" />
                <div className="mt-8 text-lg font-semibold mb-8 text-primary">
                  Coin Result
                </div>
                <div className="text-xl font-semibold mb-8 text-primary">
                  {selectChoise(coinSelection)}
                </div>
                <hr className="border-gray-300 w-full" />

                {userWin ? (
                  <div className="text-2xl font-bold my-8 text-green-500">
                    You Win!
                  </div>
                ) : (
                  <div className="text-2xl font-bold my-8 text-red-500">
                    You Loose!
                  </div>
                )}
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
      {/* <MyModal isOpen={isOpen} onClose={handleClose} py={0}>
        <ModalCloseButton _focus={{ border: "none" }} right={5} top={6} />
        <ModalBody pt={2} minH={"300px"}>
          {isLoading ? (
            <Center h="300px" w="full">
              <Spinner size={"lg"} />
            </Center>
          ) : (
            transaction &&
            isReady && (
              <Center width={"full"} flexDirection="column" mt={4}>
                <Box>Your Choice</Box>
                <Text
                  color="primary"
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={8}
                >
                  {selectChoise(userSelection)}{" "}
                </Text>
                <Divider />
                <Box mt={8}>Coin Result</Box>
                <Text
                  color="primary"
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={8}
                >
                  {selectChoise(coinSelection)}
                </Text>
                <Divider />

                {userWin ? (
                  <Text
                    color="green.500"
                    fontSize="2xl"
                    fontWeight="bold"
                    my={8}
                  >
                    You Win!
                  </Text>
                ) : (
                  <Text color="red.500" fontSize="2xl" fontWeight="bold" my={8}>
                    You Loose!
                  </Text>
                )}
              </Center>
            )
          )}
        </ModalBody>
        <ModalFooter mb={3} flexDirection="column">
          <Button
            mr={3}
            onClick={onClose}
            width="full"
            borderRadius="8px"
            height="50px"
            textTransform="uppercase"
          >
            Close
          </Button>
        </ModalFooter>
      </MyModal> */}
    </>
  );
};

export default ResultModal;
