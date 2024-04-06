import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Environment.module.css";

export type SewageType = {
  text?: string;

  /** Style props */
  elementsTagsWidth?: CSSProperties["width"];
  elementsTagsHeight?: CSSProperties["height"];
  elementsTagsBorder?: CSSProperties["border"];
  elementsTagsPadding?: CSSProperties["padding"];
  elementsTagsBackgroundColor?: CSSProperties["backgroundColor"];
  elementsTagsPosition?: CSSProperties["position"];
  elementsTagsTop?: CSSProperties["top"];
  elementsTagsLeft?: CSSProperties["left"];
  colorBackgroundColor?: CSSProperties["backgroundColor"];
  textLeft?: CSSProperties["left"];
  textFontSize?: CSSProperties["fontSize"];
  textDisplay?: CSSProperties["display"];
};

const Sewage: FunctionComponent<SewageType> = ({
  text,
  elementsTagsWidth,
  elementsTagsHeight,
  elementsTagsBorder,
  elementsTagsPadding,
  elementsTagsBackgroundColor,
  elementsTagsPosition,
  elementsTagsTop,
  elementsTagsLeft,
  colorBackgroundColor,
  textLeft,
  textFontSize,
  textDisplay,
}) => {
  const elementsTagsStyle: CSSProperties = useMemo(() => {
    return {
      width: elementsTagsWidth,
      height: elementsTagsHeight,
      border: elementsTagsBorder,
      padding: elementsTagsPadding,
      backgroundColor: elementsTagsBackgroundColor,
      position: elementsTagsPosition,
      top: elementsTagsTop,
      left: elementsTagsLeft,
    };
  }, [
    elementsTagsWidth,
    elementsTagsHeight,
    elementsTagsBorder,
    elementsTagsPadding,
    elementsTagsBackgroundColor,
    elementsTagsPosition,
    elementsTagsTop,
    elementsTagsLeft,
  ]);

  const colorStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: colorBackgroundColor,
    };
  }, [colorBackgroundColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      left: textLeft,
      fontSize: textFontSize,
      display: textDisplay,
    };
  }, [textLeft, textFontSize, textDisplay]);

  return (
    <div className={styles.elementsTags} style={elementsTagsStyle}>
      <div className={styles.group}>
        <div className={styles.color} style={colorStyle} />
        <div className={styles.text} style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Sewage;
