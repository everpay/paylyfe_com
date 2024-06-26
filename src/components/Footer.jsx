import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia  } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} pt-6 md:mt-10 mt-10 ss:mt-10 mb-0 pt-10 flex-col`}> 
    <div className={`${styles.flexStart} md:flex-row flex-col w-full pb-10`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="everpay"
          className="w-[136px] h-[33.14px] object-contain"
        />
        <p className={`${styles.paragraph} text-white mt-4 max-w-[312px]`}>
          An easy new way to collect and payout, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10  md:mb-10 mb-10 ss:mb-6 mb-6">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-6" : "mb-4"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col mt-6 mb-4 p-6">
      <p className="font-poppins font-small text-normal text-[12px] leading-[27px] md:mt-0 mt-6 text-white">
        Copyright Ⓒ 2024 Everpay. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
