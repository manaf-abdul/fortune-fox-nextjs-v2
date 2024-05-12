function BuyFortune() {
  return (
    <>
      <div className="h-screen w-full absolute top-0 left-0 p-8 z-20">
        <div className="border-4 border-white border-solid rounded-2xl mx-auto bg-white">
          <h1 className="uppercase">buy $pengu</h1>
          <p>
            Send SOL to the address below to participate in the presale, you can
            also scan the QR Code.
          </p>
          <div className="flex flex-row">
            <p></p>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
          <h1>how to buy:</h1>
          <p className="uppercase">
            Set Up A Solana Wallet (Trust Wallet, Solflare, Phantom Will Work).
          </p>
          <p className="uppercase">Buy SOLANA From Binance, Bybit, Coinbase.</p>
          <p className="uppercase">
            Send the bought SOLANA To Your Personal Wallet
          </p>
          <p className="uppercase">
            Send the SOLANA From Your Personal (Not Exchange) Wallet To $PENGU
            Pre-Sale Address
          </p>
          <p className="uppercase">
            visit the <span>leaderboard</span> and input your address to see the
            amount of $PENGU you will receive
          </p>
          <p className="uppercase">
            Once Pre-sale Ends, Your Tokens Will be Airdropped To Your Wallet.
          </p>
          <p className="uppercase">
            join our <span>telegram</span> and <span>discord </span> communities
            if you have any enquiries
          </p>
        </div>
      </div>
    </>
  );
}

export default BuyFortune;
