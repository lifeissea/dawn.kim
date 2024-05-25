import React from "react";
import { BsPhoneFill, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

export const heading = {
  title: "연락처",
  subtitle: "언제든지 연락 주세요",
};

export const contactInfo = {
  title: "모든 주제 환영입니다.!",
  desc: "문의 사항이 있으시면 언제든지 연락 주세요. 당신의 의견을 듣고 싶습니다.",
  list: [
    {
      value: "+(82)10-8430-7345",
      icon: React.createElement(BsPhoneFill),
    },
    {
      value: "iam@dawn.kim",
      icon: React.createElement(BsEnvelopeFill),
    },
    {
      value: "서울, 대한민국",
      icon: React.createElement(BsGeoAltFill),
    },
  ],
};
export const btnSubmitData = {
  text: "메시지 보내기",
  type: "submit",
  icon: React.createElement(BsSendFill),
};
