import React from "react";
import { LatestNews } from "../../components/LatestNews";
import { Schedule } from "../../components/Schedule";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-2">
        <img className="rectangle" alt="Rectangle" src="/img/rectangle-3.png" />
        <img className="img" alt="Rectangle" src="/img/rectangle-4.png" />
        <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-11.png" />
        <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-5.png" />
        <div className="overlap">
          <img className="image" alt="Image" src="/img/image-1.png" />
          <img className="image-2" alt="Image" src="/img/image-2.png" />
          <p className="AFRICA-s-LEADING">
            <span className="span">AFRICA’S LEADING </span>
            <span className="text-wrapper-2">F</span>
            <span className="span">1&nbsp;&nbsp;FAN CHANNEL</span>
          </p>
          <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-3-1.svg" />
          <div className="text-wrapper-3">ABOUT</div>
          <div className="text-wrapper-4">HOME</div>
          <div className="text-wrapper-5">CONTACT</div>
          <div className="text-wrapper-6">LOCATIONS</div>
          <div className="rectangle-5" />
          <div className="div-wrapper">
            <div className="text-wrapper-7">SIGN UP</div>
          </div>
          <Schedule className="SCHEDULE-instance" />
          <LatestNews className="LATEST-NEWS-instance" />
          <img className="AFRICA" alt="Africa" src="/img/f1-africa.png" />
        </div>
        <div className="text-wrapper-8">WATCHALONGS</div>
        <div className="text-wrapper-9">MOTOR EXPERINCE</div>
        <div className="text-wrapper-10">ESPORTS</div>
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="div-3">
              <div className="div-4">
                <div className="text-wrapper-11">EMAIL :motorzar@co.za</div>
              </div>
              <div className="div-4">
                <div className="text-wrapper-11">PRIVACY POLICY’S</div>
                <div className="text-wrapper-11">TERMS &amp; CONDITIONS</div>
              </div>
            </div>
            <div className="div-3">
              <div className="div-4">
                <div className="text-wrapper-11">EMAIL :motorzar@co.za</div>
              </div>
            </div>
          </div>
          <div className="div-wrapper-2">
            <div className="text-wrapper-11">POWERED BY : Caledad</div>
          </div>
          <img
            className="set-of-black-circle"
            alt="Set of black circle"
            src="/img/set-of-black-circle-social-media-logos-with-new-x-logo-fb-01.png"
          />
          <img
            className="set-of-black-circle-2"
            alt="Set of black circle"
            src="/img/set-of-black-circle-social-media-logos-with-new-x-logo-x-01.png"
          />
          <img
            className="set-of-black-circle-3"
            alt="Set of black circle"
            src="/img/set-of-black-circle-social-media-logos-with-new-x-logo-ig-01.png"
          />
          <img
            className="set-of-black-circle-4"
            alt="Set of black circle"
            src="/img/set-of-black-circle-social-media-logos-with-new-x-logo-yt-01.png"
          />
          <img
            className="set-of-black-circle-5"
            alt="Set of black circle"
            src="/img/set-of-black-circle-social-media-logos-with-new-x-logo-in-01.png"
          />
          <img
            className="set-of-black-circle-6"
            alt="Set of black circle"
            src="/img/set-of-black-circle-social-media-logos-with-new-x-logo-tt-01.png"
          />
          <img className="line" alt="Line" src="/img/line-1.svg" />
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-12">NEWS UPDATES</div>
          <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-11.png" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-13">MOTORZAR EXERIENCE</div>
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-11.png" />
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-14">WATCH ALONG WITH US</div>
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-11.png" />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-13">ESPORTS</div>
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-11.png" />
        </div>
        <div className="overlap-7">
          <div className="text-wrapper-15">SCHEDULE</div>
          <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-11.png" />
        </div>
      </div>
    </div>
  );
};
