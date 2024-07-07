import styles from "./KidsDescriptionSection.module.scss";
export const KidsDescriptionSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Ready to rumble?</h1>
      <div className={styles.container}>
        <img
          className={styles.image1}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2FDLN0TdFTXxxzFuYKtJdO9%2F2effcaf430b71f6e1863cbcb2b89ad76%2Fkids_img1.png&w=1920&q=75"
          alt=""
        />
        <img
          className={styles.image2}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F5lkz3HxvY6RwvpFglYx2i9%2F4162d12daafc39c015274d2b0a533241%2Fkids_img2.png&w=1920&q=75"
          alt=""
        />
        <img
          className={styles.image3}
          src="https://www.veloretti.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqp8eahdr9bo6%2F40On17Fz7lJ7EegcgWlcRz%2F2b2e88a13bb988dcb4f692cff1693fa4%2Fkids_img3.png&w=1920&q=75"
          alt=""
        />
        <div className={styles.description}>
          <p className={styles.text}>
            Specially crafted for the next generation of explorers, our kids
            bikes are the perfect start to a balanced life. With bikes ranging
            from the age of 1.5 - 8 years, we've got everything to grow with
            your little ones.
          </p>
        </div>
      </div>
    </section>
  );
};
