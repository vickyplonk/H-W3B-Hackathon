import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.footer}>
        <div className={styles.ecoGuardianFooter}>Liquidium</div>
        <img className={styles.whiteEcoguardianLogo} alt="" src="/white-ecoguardian-logo@2x.png"/>
      </div>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <Filters />
      <div className={styles.greenheader}>
        <div className={styles.leftContent}>
          <div className={styles.ecoGuardian}>Liquidium</div>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        </div>
        <div className={styles.rightContent}>
          <Link className={styles.teamName} to="/donate-about-us">
            <p>Donate & About Us</p>
          </Link>
        </div>
      </div>
      
      <a className={styles.seeForYourself}>See for yourself - Explore the sensor data directly!</a>

    </div>
  );
};

export default HomePage;