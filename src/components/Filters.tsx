import { FunctionComponent } from "react";
import Sewage from "./Environment";
import styles from "./Filters.module.css";

const Filters: FunctionComponent = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.environmentalFilters}>
      <button className={styles.sewageButton}>
        <Sewage
          text="Sewage"
          elementsTagsWidth="168px"
          elementsTagsHeight="58px"
          elementsTagsBorder="none"
          elementsTagsPadding="0"
          elementsTagsBackgroundColor="transparent"
          elementsTagsPosition="absolute"
          elementsTagsTop="0px"
          elementsTagsLeft="0px"
          colorBackgroundColor="#e2fbd7"
          textLeft="24.58%"
          textFontSize="24px"
          textDisplay="inline-block"
        />
      </button>
      <button className={styles.oilButton}>
        <Sewage
          text="CO2 Emissions"
          elementsTagsWidth="168px"
          elementsTagsHeight="58px"
          elementsTagsBorder="none"
          elementsTagsPadding="0"
          elementsTagsBackgroundColor="transparent"
          elementsTagsPosition="absolute"
          elementsTagsTop="0px"
          elementsTagsLeft="394px"
          colorBackgroundColor="#e2fbd7"
          textLeft="8.57%"
          textFontSize="20px"
          textDisplay="inline-block"
        />
      </button>
      <button className={styles.co2Button}>
        <Sewage
          text="Oil Spillage"
          elementsTagsWidth="168px"
          elementsTagsHeight="58px"
          elementsTagsBorder="none"
          elementsTagsPadding="0"
          elementsTagsBackgroundColor="transparent"
          elementsTagsPosition="absolute"
          elementsTagsTop="0px"
          elementsTagsLeft="197px"
          colorBackgroundColor="#e2fbd7"
          textLeft="13.93%"
          textFontSize="24px"
          textDisplay="inline-block"
        />
        </button>
      </div>
      <div className={styles.countryFilters}>
        <button className={styles.ukButton}>
          <Sewage
            text=" UK"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="unset"
            elementsTagsPadding="unset"
            elementsTagsBackgroundColor="unset"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="38.87%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.ukFlagIcon} alt="" src="/uk-flag@2x.png" />
        </button>
        <button className={styles.us}>
          <Sewage
            text=" US"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="none"
            elementsTagsPadding="0"
            elementsTagsBackgroundColor="transparent"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="38.87%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.usIcon} alt="" src="/us@2x.png" />
        </button>
        <button className={styles.china}>
          <Sewage
            text="    China"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="unset"
            elementsTagsPadding="unset"
            elementsTagsBackgroundColor="unset"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="38%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.chinaIcon} alt="" src="/china@2x.png" />
        </button>
        <button className={styles.india}>
          <Sewage
            text="    India"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="unset"
            elementsTagsPadding="unset"
            elementsTagsBackgroundColor="unset"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="40%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        </button>
        <button className={styles.russia}>
          <Sewage
            text="    Russia"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="unset"
            elementsTagsPadding="unset"
            elementsTagsBackgroundColor="unset"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="40%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.russiaIcon} alt="" src="/russia@2x.png" />
        </button>
        <button className={styles.japan}>
          <Sewage
            text="     Japan"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="unset"
            elementsTagsPadding="unset"
            elementsTagsBackgroundColor="unset"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="38%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.japanIcon} alt="" src="/japan@2x.png" />
        </button>
        <button className={styles.eu}>
          <Sewage
            text=" EU"
            elementsTagsWidth="168px"
            elementsTagsHeight="58px"
            elementsTagsBorder="unset"
            elementsTagsPadding="unset"
            elementsTagsBackgroundColor="unset"
            elementsTagsPosition="absolute"
            elementsTagsTop="0px"
            elementsTagsLeft="0px"
            colorBackgroundColor="#c7e3fc"
            textLeft="40%"
            textFontSize="24px"
            textDisplay="inline-block"
          />
          <img className={styles.euIcon} alt="" src="/eu@2x.png" />
        </button>
      </div>
      <div className={styles.filterTitle}>
        Filter by Environmental Concern/Country:
      </div>
    </div>
  );
};

export default Filters;
