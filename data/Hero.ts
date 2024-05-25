import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export const bannerData = {
  imageBg: "/assets/images/bg/bg.jpeg",
  subtitle: "👋 안녕하세요!,",
  title: "현재 ",
  words: ["개발자", "기획자", "게임체인저"],
  desc: "김여명입니다.<br>'여명거리'라는 법인의 설립자이자 대표입니다.<br>여명거리는 세상에 긍정적인 변화를 주기 위해 다양한 프로젝트를 진행하고 있습니다.<br>사회 각 분야에 혁신을 가져오고, 더 나은 미래를 만들기 위한 노력을 계속하고 있습니다.",
  button: {
    text: "궁금해요!",
    href: "#about",
    icon: React.createElement(BsPersonCircle),
  },
};

export const InfoData = [
  {
    label: "이메일:",
    value: "iam@dawn.kim",
  },
  {
    label: "휴대폰:",
    value: "+82-10-8430-7345",
  },
  {
    label: "위치:",
    value: "서울 ,대한민국",
  },
];

import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsDribbble,
  BsGithub,
} from "react-icons/bs";
export const SocialIcons = [
  // {
  //   href: "#",
  //   icon: React.createElement(BsFacebook),
  // },
  {
    href: "https://twitter.com/DawnKim_KR",
    icon: React.createElement(BsTwitterX),
  },
  // {
  //   href: "#",
  //   icon: React.createElement(BsInstagram),
  // },
  // {
  //   href: "#",
  //   icon: React.createElement(BsDribbble),
  // },
  {
    href: "https://github.com/lifeissea",
    icon: React.createElement(BsGithub),
  },
];
