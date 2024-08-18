"use client";

// // import { claimTo, getNFT } from "thirdweb/extensions/erc1155";
// import { mintTo } from "thirdweb/extensions/erc721";
// import { useSendTransaction } from "thirdweb/react";

// import abi from "./abi.json";
// import { getContract } from "thirdweb/contract";
// import { polygonMumbai, scrollSepoliaTestnet } from "thirdweb/chains";
// import { createThirdwebClient } from "thirdweb";
import MintTo from "./MintTo";

export default function Home() {
  // const { mutate: sendTx, data: transactionResult } = useSendTransaction();

  // const THIRDWEB_CLIENT = createThirdwebClient(
  //   process.env.THIRDWEB_SECRET_KEY
  //     ? { secretKey: process.env.THIRDWEB_SECRET_KEY }
  //     : {
  //         clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
  //       }
  // );

  // const contract = getContract({
  //   address: "0x827c1c3889923015C1FC31BF677D00FbE6F01D52",
  //   chain: scrollSepoliaTestnet,
  //   client: THIRDWEB_CLIENT,
  // });

  // const onClick = () => {
  //   const transaction = mintTo({
  //     contract,
  //     to: "0x...",
  //     nft: {
  //       name: "NFT Name",
  //       description: "NFT Description",
  //       image: "https://example.com/image.png",
  //     },
  //   });
  //   sendTx(transaction);
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buy NFT
      </button> */}

      <MintTo />
    </main>
  );
}
