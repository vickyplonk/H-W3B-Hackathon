import { FunctionComponent } from "react";
import {
  Radio,
  FormControlLabel,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./DonateAboutUs.module.css";

const DonateAboutUs: FunctionComponent = () => {
  return (
    <div className={styles.donateAboutUs}>
      <div className={styles.footer}>
        <div className={styles.ecoGuardianFooter}>Liquidium</div>
        <img className={styles.whiteEcoguardianLogo} alt="" src="/white-ecoguardian-logo@2x.png"/>
      </div>
      <div className={styles.greenheader}>
        <div className={styles.leftContent}>
          <Link className={styles.header} to="/">
          <div className={styles.ecoGuardian}>Liquidium</div>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          </Link>
        </div>
        <div className={styles.rightContent}>
          <p>Donate & About Us</p>
        </div>
      </div>
      <div className={styles.withLotsOfContainer}>
        <p className={styles.aboutUs}>About Us</p>
        <p>
          We're driven by a profound commitment to improving transparency and
          raising awareness about sound environmental practices. Our mission is
          not just to highlight the importance of sustainable initiatives, but
          also to hold accountable those who may fall short of their
          environmental responsibilities.
          <br /><br />
          Harnessing the power of blockchain technology, we're revolutionizing
          the way environmental data is validated and accessed. By leveraging
          blockchain's inherent transparency and immutability, we ensure that
          the information we provide is trustworthy and tamper-proof.
          <br /><br />
          Our approach is unique in that we gather data from sensors installed
          within existing infrastructure. This data is then securely recorded on
          the blockchain, providing a clear and verifiable record of
          environmental performance.
          <br /><br />
          Through our platform, we empower individuals, organizations, and
          regulatory bodies to make informed decisions and take meaningful
          action to address environmental concerns. We believe that by shining a
          light on both exemplary environmental practices and areas in need of
          improvement, we can drive positive change and foster a more
          sustainable future for all.
        </p>
      </div>
      <div className={styles.withLotsOfContainer1}>
        <p className={styles.aboutUs}>Donate</p>
        <p>
          Join us in our mission to create a world where transparency and accountability are the cornerstones of environmental stewardship.
          <br /><br />
          Together, we can make a lasting impact on the health of our planet and
          the well-being of future generations.
        </p>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.chooseADonationAmountParent}>
          <div className={styles.chooseADonation}>Choose a donation amount <br></br></div>
          <div className={styles.frameGroup}>
            <FormControlLabel label="£10" control={<Radio color="success" />} />
            <FormControlLabel label="£50" control={<Radio color="success" />} />
            <FormControlLabel
              label="£100"
              control={<Radio color="success" />}
            />
            <TextField
              className={styles.enterACustom}
              color="success"
              label="Enter a custom donation amount"
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "17px" } }}
            />
          </div>
        </div>
        <div className={styles.chooseADonationAmountParent}>
          <div className={styles.chooseADonation}>Choose a donation frequency</div>
          <div className={styles.frameContainer}>
            <FormControlLabel
              className={styles.frameChild}
              label="Monthly"
              control={<Radio color="success" checked />}
            />
            <FormControlLabel
              className={styles.frameChild}
              label="One time"
              control={<Radio color="success" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateAboutUs;
