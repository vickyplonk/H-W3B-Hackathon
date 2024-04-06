import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.footer}>
        <div className={styles.ecoGuardianFooter}>EcoGuardian</div>
        <img
          className={styles.whiteEcoguardianLogo}
          alt=""
          src="/white-ecoguardian-logo@2x.png"
        />
      </div>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <Filters />
      <header className={styles.greenheader}></header>
      
      <div className={styles.header}>
        <div className={styles.ecoGuardian}>EcoGuardian</div>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <a className={styles.seeForYourself}>
        See for yourself - Explore the sensor data directly!
      </a>
      <Link className={styles.teamName} to="/donate-about-us">
        <p className={styles.teamLiquidium}>Team Liquidium</p>
        <p className={styles.donateAbout}>{`Donate & About Us`}</p>
      </Link>
    </div>
  );
};

export default HomePage;
