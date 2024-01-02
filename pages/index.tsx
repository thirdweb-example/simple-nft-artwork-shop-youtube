import { useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { NFT_CONTRACT_ADDRESS } from "../constants/constants";
import NFTCard from "../components/NFTCard";

const Home: NextPage = () => {
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const { data: nfts } = useNFTs(contract);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Artwork for sale:</h2>
        <div className={styles.grid}>
        {nfts && nfts.length > 0 ? (
          nfts.map((nft) => (
            <NFTCard
              key={nft.metadata.id}
              nft={nft}
            />
          ))
        ) : (
          <p>No artwork available</p>
        )}
        </div>
      </div>
    </main>
  );
};

export default Home;
