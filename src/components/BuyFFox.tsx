import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface BuyFFoxProps {
  handleModalClose?: () => void;
}

export default function BuyFFox({ handleModalClose }: BuyFFoxProps) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const token = "CPbYwvAeUEojg5hMVpmeupbkAuJNyc8YtQXzJ3oaAqoC";
  return (
    <div>
      <>
        <div className="h-screen fixed w-full z-10 top-0 left-0 bg-transparent/55"></div>
        <div className="h-screen fixed w-full p-6 md:p-8 z-20 top-0 left-0  overflow-y-scroll">
          <div className="w-full modal border-4 md:modal-w border-white border-solid rounded-2xl mx-auto modalBg p-8 text-white text-center md:w-[580px] relative bg-gradient-to-br from-pink-900 via-purple-600 to-black">
            <img
              src="assets/close.svg"
              alt=""
              className="absolute right-8 cursor-pointer"
              onClick={handleModalClose}
            />
            <h1 className="uppercase text-4xl font-bold text-start md:text-center">
              buy $FFOX
            </h1>
            <p className="uppercase text-lg mt-4">
              Send SOL to the address below to participate in the presale, you
              can also scan the QR Code.
            </p>
            <div className="flex flex-row overflow-hidden rounded-lg mt-8 mx-auto max-w-fit h-10">
              <p className="overflow-x-auto px-1 bg-white text-pink-800 flex items-center w-[85%] md:w-full">
                {token}
              </p>
              <div className="bg-black w-[15%] md:w-fit p-1">
                <CopyToClipboard text={token} onCopy={onCopyText}>
                  <span>
                    {isCopied ? (
                      <img
                        src="assets/check.svg"
                        alt="check"
                        className="w-8 h-8"
                      />
                    ) : (
                      <img
                        src="assets/copy.svg"
                        alt="Copy"
                        className="cursor-pointer"
                      />
                    )}
                  </span>
                </CopyToClipboard>
              </div>
            </div>
            <div className="bg-white rounded-md w-60 h-60 mx-auto my-8 flex justify-center items-center overflow-hidden">
              <QRCode value={token} size={224} />
            </div>
            <h1 className="text-white text-4xl font-bold">how to buy:</h1>
            <p className="uppercase text-lg mb-4">
              Set Up A Solana Wallet (Trust Wallet, Solflare, Phantom Will
              Work).
            </p>
            <p className="uppercase text-lg mb-4">
              Buy SOLANA From Binance, Bybit, Coinbase.
            </p>
            <p className="uppercase text-lg mb-4">
              Send the bought SOLANA To Your Personal Wallet
            </p>
            <p className="uppercase text-lg mb-4">
              Send the SOLANA From Your Personal (Not Exchange) Wallet To $FFOX
              Pre-Sale Address
            </p>
            <p className="uppercase text-lg mb-4">
              visit the <span className="text-green-400">leaderboard</span> and
              input your address to see the amount of $FFOX you will receive
            </p>
            <p className="uppercase text-lg mb-4">
              Once Pre-sale Ends, Your Tokens Will be Airdropped To Your Wallet.
            </p>
            <p className="uppercase text-lg mb-4">
              join our <span className="text-green-400">telegram</span> and
              <span className="text-green-400">discord </span> communities if
              you have any enquiries
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
