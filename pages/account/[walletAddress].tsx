import { MediaRenderer, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../../constants/constants";

const Account = () => {
    const address = useAddress();

    const { contract } = useContract(NFT_CONTRACT_ADDRESS);
    const { data: ownedNFTs } = useOwnedNFTs(contract, address);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h2>Account</h2>
                <h3>My Collectibles</h3>
                <div className={styles.grid}>
                    {ownedNFTs && ownedNFTs.length > 0 ? (
                        ownedNFTs.map((nft) => (
                            <div key={nft.metadata.id}>
                                <MediaRenderer
                                    src={nft.metadata.image}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No artwork available</p>
                    )}
                </div>
            </div>
        </main>
    )
};

export default Account;