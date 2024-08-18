"use client";

import { PayEmbed, useSendTransaction } from "thirdweb/react";
import { claimTo, mintTo } from "thirdweb/extensions/erc721";
import { createThirdwebClient, getContract } from "thirdweb";
import abi from "./abi.json";
import { sepolia } from "thirdweb/chains";

const MintTo = () => {
  const THIRDWEB_CLIENT = createThirdwebClient(
    process.env.THIRDWEB_SECRET_KEY
      ? { secretKey: process.env.THIRDWEB_SECRET_KEY }
      : {
          clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
        }
  );
  const { mutate: sendTx, data: transactionResult } = useSendTransaction();

  const contract = getContract({
    address: "0x858e05d12a082c2B7a80a95E6399968145e44396",
    client: THIRDWEB_CLIENT,
    chain: sepolia,
  });

  const onClick = () => {
    console.log("starting payment");
    const transaction = mintTo({
      contract,
      to: "0xDa3aacE323ca125706271df47d9D4cb0c70Dff41",
      nft: {
        name: "NFT Name",
        description: "NFT Description",
        image:
          "https://white-wrong-kangaroo-454.mypinata.cloud/ipfs/QmVZgUaVYxyL2xr4jvm41cfN34Pi29C6WDm6VJRy5BsmRV/0",
      },
    });
    sendTx(transaction);
    console.log("done payment");

    console.log(transactionResult?.transactionHash);
  };

  return (
    // <button
    //   onClick={onClick}
    //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    // >
    //   Buy NFT
    // </button>
    <PayEmbed
      client={THIRDWEB_CLIENT}
      payOptions={{
        mode: "transaction",
        transaction: mintTo({
          contract,
          to: "0xDa3aacE323ca125706271df47d9D4cb0c70Dff41",
          nft: {
            name: "NFT Name",
            description: "NFT Description",
            image:
              "https://white-wrong-kangaroo-454.mypinata.cloud/ipfs/QmVZgUaVYxyL2xr4jvm41cfN34Pi29C6WDm6VJRy5BsmRV/0",
          },
        }),
        metadata: {
          name: "NFT Name",
          // description: "NFT Description",
          image:
            "https://white-wrong-kangaroo-454.mypinata.cloud/ipfs/QmVZgUaVYxyL2xr4jvm41cfN34Pi29C6WDm6VJRy5BsmRV/0",
        },
      }}
    />
  );
};

export default MintTo;
