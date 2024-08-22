import { IStats } from "@/_types_";
import styles from "./Stats.module.scss";
import StatsCard from "./StatsCard";

export const companyInfos = [
  {
    logo: "https://cdn1.iconfinder.com/data/icons/system-black-circles/512/apple-1024.png",
    name: "Apple",
    totalShares: "$310,40",
    totalReturn: -0.85,
  },
  {
    logo: "https://th.bing.com/th/id/R.e790c25db5e52838040686612b1a732c?rik=uVuLX4sResGMKA&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19757.png&ehk=JL234rPBfx%2bf3tobhEVbPdNgJiWOhk251WyRwRAg940%3d&risl=&pid=ImgRaw&r=0",
    name: "Meta",
    totalShares: "$310,40",
    totalReturn: 0.05,
  },
  {
    logo: "https://th.bing.com/th/id/OIP.PWoq1WvDQDxc_MPv4Jt0GwHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Microsoft",
    totalShares: "$310,40",
    totalReturn: -0.85,
  },
  {
    logo: "https://th.bing.com/th/id/OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj?rs=1&pid=ImgDetMain",
    name: "Google",
    totalShares: "$310,40",
    totalReturn: -0.85,
  },
];

export default function Stats({ theme }: IStats) {
  return (
    <div className={styles.wrapper}>
      {companyInfos.map((item, index) => (
        <StatsCard {...item} key={index} theme={theme} />
      ))}
    </div>
  );
}
