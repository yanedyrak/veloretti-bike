import styles from "./MapSection.module.scss";
export const MapSection = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>
        <span>Make your commute</span>
        <span>the best part of your day.</span>
      </div>
      <div className={styles.description}>
        <p className={styles.text}>
          Clean and timeless designs that make every ride a thrill. Wherever
          you're heading, our bikes are made to make your daily commute a joy.
        </p>
        <svg
          width="39"
          height="50"
          viewBox="0 0 19 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.46488 7.36452C3.44072 7.33249 3.4258 7.29748 3.4258 7.26098V3.82267C3.4258 3.73626 3.49331 3.66699 3.57573 3.66699H9.34651C10.5417 3.66699 11.5764 4.00441 12.4191 4.66809C13.5454 5.553 14.2177 7.00028 14.2177 8.54439C14.2177 9.51346 13.9412 10.4684 13.4168 11.3116L13.3877 11.3563C12.7545 12.0922 12.7936 13.2341 13.4786 13.9119C13.7934 14.2195 14.217 14.3901 14.6689 14.3901C15.1386 14.3901 15.5948 14.2017 15.8897 13.8851L15.9672 13.8039C17.0729 12.3626 17.6825 10.4937 17.6825 8.54513C17.6825 6.48483 17.0324 4.5139 15.852 2.99661C14.7869 1.62828 12.7929 0 9.34651 0H0V27H3.4258V13.7965C3.4258 13.7309 3.46559 13.6728 3.52315 13.6497C3.5331 13.646 3.57218 13.6393 3.57431 13.6378C3.61837 13.6378 3.66101 13.6579 3.68659 13.6929L14.3456 26.854L14.4642 27H19L10.983 16.9927L3.46488 7.36452Z"
            fill="black"
          ></path>
        </svg>
      </div>
      <div className={styles.map}>
        <div className={styles.mapDescription}>
          <h1 className={styles.mapTitle}>
            Discover your local Veloretti partner store
          </h1>
          <p className={styles.about}>
            Our partner stores across the Netherlands are there for you. Whether
            you're looking to pick up a newly ordered bike, need a fix, or want
            to test ride our Ivy or Ace Two, your ideal biking experience is
            closer than you think.
          </p>
          <button className={styles.button}>Find a partner near you</button>
        </div>
      </div>
    </div>
  );
};
