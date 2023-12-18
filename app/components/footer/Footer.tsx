import { styled } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between cursor-pointer mt-3 p-8 bg-gray-800 text-white">
        <article className="flex flex-col gap-1">
          <h1>E-commerce</h1>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a>Shipping & Returns</a>
            </li>
            <li>
              <a href="/meet-us">About Us</a>
            </li>
            <li>
              <a href="/help">Help & Contact</a>
            </li>
            <li>
              <span>Data preferences</span>
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-3">
          <h5>Campaigns</h5>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a>Join the E-commerce Influencer program</a>
            </li>
            <li>
              <a href="/">E-commerce Rewards</a>
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-2">
          <h5>Secure shopping</h5>
          <div className="flex gap-3 flex-wrap">
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/PayPal3x.png"
              className="h-7"
            />
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/Mastercard3x.png"
              className="h-7"
            />
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/Visa3x.png"
              className="h-7"
            />
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/Amex3x.png"
              className="h-7"
            />
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/DinersClub3x.png"
              className="h-7"
            />
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/Applepay3x.png"
              className="h-7"
            />
            <img
              src="https://cdn.dsmcdn.com/mobile/international/PaymentLogo/gpay3x.png"
              className="h-7"
            />
          </div>
          <div>
            <p className="p-1">All prices include VAT</p>
            <img
              src="https://cdn.dsmcdn.com/web/production/global_sign.png"
              alt="global sign logo"
              loading="lazy"
              className="global-sign-logo"
              width="75"
              height="30"
            />
          </div>
        </article>
        <div>
          <article className="flex flex-col gap-2">
            <h5>Follow us</h5>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/trendyol"
                target="_blank"
                rel="external noreferrer"
                aria-label="social-media-links"
                data-testid="instagram-icon"
              >
                <img
                  src="https://cdn.dsmcdn.com/sfint/production/icons/instagram_circle_1665351098160.svg"
                  className="social-media-icon"
                  alt="instagram-icon"
                />
              </a>
              <a
                href="https://www.tiktok.com/@trendyol"
                target="_blank"
                rel="external noreferrer"
                aria-label="social-media-links"
                data-testid="tiktok-icon"
              >
                <img
                  src="https://cdn.dsmcdn.com/sfint/production/icons/tiktok_1688549895579.svg"
                  className="social-media-icon"
                  alt="tiktok-icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCeu2lys0vIV6cpCQnGQauAQ"
                target="_blank"
                rel="external noreferrer"
                aria-label="social-media-links"
                data-testid="youtube-icon"
              >
                <img
                  src="https://cdn.dsmcdn.com/sfint/production/icons/youtube_circle_1665351098160.svg"
                  className="social-media-icon"
                  alt="youtube-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/TrendyolENG"
                target="_blank"
                rel="external noreferrer"
                aria-label="social-media-links"
                data-testid="facebook-icon"
              >
                <img
                  src="https://cdn.dsmcdn.com/sfint/production/icons/facebook_circle_1665351098160.svg"
                  className="social-media-icon"
                  alt="facebook-icon"
                />
              </a>
              <a
                href="https://twitter.com/trendyol"
                target="_blank"
                rel="external noreferrer"
                aria-label="social-media-links"
                data-testid="x-icon"
              >
                <img
                  src="https://cdn.dsmcdn.com/sfint/production/x-icon_1695290068401.svg"
                  className="social-media-icon"
                  alt="x-icon"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
      <section>
        <div className="flex w-full justify-between items-center p-2 bg-gray-900 text-gray-300 text-xs px-5 ">
          <article>
            <p>©2023 All Rights Reserved.</p>
          </article>
          <article>
            <ul className="flex gap-3">
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/">Right of Withdrawal</a>
              </li>
              <li>
                <a href="/">Imprint</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
