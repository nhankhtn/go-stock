import styles from "./WatchList.module.scss";
import WatchItem from "./WatchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const watchlist = [
  {
    logo: "https://th.bing.com/th/id/R.6c613680b8906e10ec36022dc710d198?rik=EA3uwjQTrEaWsg&pid=ImgRaw&r=0",
    shortName: "SPOT",
    name: "Spotify",
    totalShares: "$310,40",
    totalReturn: -0.011,
  },
  {
    logo: "https://th.bing.com/th/id/OIP.Q7BZIFUeulOPTvn0md4fcwHaIN?rs=1&pid=ImgDetMain",
    shortName: "ABNB",
    name: "Airbnb",
    totalShares: "$310,40",
    totalReturn: -0.1029,
  },

  {
    logo: "https://th.bing.com/th/id/R.bfb62a75835cb6c065899062d5813414?rik=UeFpZWKZ4RDMRw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f10%2fShopify_logo_icon.png&ehk=ZnhlsQ1OoBnOLLLf1MtQmTJX1iJAZdQQj4FEKfpmC4I%3d&risl=&pid=ImgRaw&r=0",
    shortName: "SHOP",
    name: "Shopify",
    totalShares: "$310,40",
    totalReturn: -0.0648,
  },
  {
    logo: "https://th.bing.com/th/id/OIP.4azPGQjimoH5KB-6inJqIQHaGB?rs=1&pid=ImgDetMain",
    shortName: "SONY",
    name: "Playstation",
    totalShares: "$310,40",
    totalReturn: 0.0098,
  },
  {
    logo: "https://th.bing.com/th/id/OIP.QCSXv_RVcwZIzktzLyoFUAHaHa?rs=1&pid=ImgDetMain",
    shortName: "DBX",
    name: "Dropbox Inc",
    totalShares: "$310,40",
    totalReturn: -0.0308,
  },
  {
    logo: "https://th.bing.com/th/id/OIP.Rj2zAxvt9iXy9Q_6o7fEfwHaIv?rs=1&pid=ImgDetMain",
    shortName: "PYPL",
    name: "Paypal",
    totalShares: "$310,40",
    totalReturn: -0.0386,
  },
];

export default function WatchList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>My watchlist</h2>
        <button
          type='button'
          title='Add watchlist'
          className={styles["btn-add"]}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className={styles["body-watchlist"]}>
        {watchlist.map((item, index) => (
          <WatchItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
