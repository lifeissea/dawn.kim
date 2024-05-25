import React from "react";
import { BsDownload } from "react-icons/bs";

export const heading = {
  title: "소개",
  subtitle: "주요 정보를 한눈에 확인하세요.",
};

export const profile = {
  image: "/assets/images/about/me.jpeg",
  title: "안녕하세요, 저는 한국에 거주하는 김여명입니다",
  bio: "기계공학과 창업융합을 전공하였고, 기술 혁신과 창업에 대한 열정을 바탕으로 다양한 분야에서 신사업 개발과 기획을 진행하고 있습니다. 현재는 4차 산업혁명의 핵심 기술인 블록체인과 NFT, P2E, 리워드앱 등을 중심으로 사업을 이끌고 있습니다.",
  list: [
    { label: "휴대폰 :", value: "+82-10-8430-7345" },
    { label: "국적 :", value: "대한민국" },
    { label: "이메일 :", value: "iam@dawn.kim" },
    { label: "주소 :", value: "서울시 마포구, 대한민국" },
    { label: "현재 상태 :", value: "열일 중" },
  ],
  button: {
    text: "이력서 다운로드",
    href: "https://moredawn.notion.site/Tomas-d9dfd6b9e749410aa3d4e9483e2818d2",
    icon: React.createElement(BsDownload),
  },
};

export const features = [
  { count: "+5", text: "진행한 프로젝트 수" },
  { count: "+4억 원", text: "투자 누적액" },
  { count: "+7", text: "경력 연수" },
  { count: "+10", text: "제휴 파트너 수" },
];

export const timeline = [
  {
    heading: "경력 사항",
    image: "/assets/images/about/exp.png",
    data: [
      {
        role: "앱 개발 및 AI 연구개발",
        place: "(주)포레거시",
        year: "2023.04 - 현재",
        desc: "온라인 추모 서비스와 블록체인 기술을 결합한 신사업 개발, 서비스 기획 및 개발 전반을 관리하고 있으며, Photo to Video AI 연구개발을 진행 중입니다.",
      },
      {
        role: "메타버스 개발자",
        place: "Here (사이드 프로젝트)",
        year: "2023.06 - 현재",
        desc: "메타버스 기반의 실시간 지도기반 SNS 서비스 앱 개발을 담당, Flutter를 이용한 앱 개발 및 Google Map Grid 시스템 통합.",
      },
      {
        role: "대표이사 / 기획 및 개발 총괄",
        place: "(주)여명거리",
        year: "2019 - 현재",
        desc: "다양한 앱 및 웹 개발 프로젝트와 블록체인 기술을 적용한 프로젝트 진행을 이끌고 있으며, 기술 혁신을 통한 서비스 개선과 비즈니스 확장에 주력하고 있습니다.",
      },
      {
        role: "블록체인 및 NFT 사업 기획",
        place: "(주)스파이크그룹",
        year: "2021 - 2022",
        desc: "P2E 및 리워드 앱 기반의 수익 구조 개발, 개발 팀 관리 및 텔레그램, 카카오톡 등 SNS 채널 운영.",
      },
      {
        role: "창립자 및 기획 / 블록체인 기반 서비스 기획",
        place: "(주)인블록",
        year: "2018 - 2019",
        desc: "블록체인 기술을 활용한 서비스 기획 및 개발, 중견기업 대상 개발 수주 및 해외 거래소 리스팅 진행.",
      },
      {
        role: "창립자 및 기획 / 개발 총괄",
        place: "(주)몰던, 중국",
        year: "2017 - 2018",
        desc: "중국에서 창업하여 3D 프린터를 활용한 과학상자를 제안하고, 4차 산업혁명의 핵심 기술을 기반으로 한 제품 개발 및 판매를 주도하였습니다. 이 기간 동안 마케팅 전략 수립 및 교육, 제조, 판매 활동을 통해 시장을 확대하였습니다.",
      },
    ],
  },
  {
    heading: "교육 이력",
    image: "/assets/images/about/edu.png",
    data: [
      {
        role: "기계공학 창업융합 전공",
        place: "한양대학교",
        year: "중퇴",
        desc: "기계공학과 창업융합을 전공하며, 기술 창업 및 혁신적 기업 경영에 필요한 다양한 지식과 경험을 습득.",
      },
    ],
  },
  {
    heading: "보유 특허 및 서비스 앱",
    image: "/assets/images/about/skills.png",
    data: [
      {
        role: "인센티브 및 블록체인 기반의 정보 전달 플랫폼",
        desc: "이 플랫폼은 블록체인 기술을 활용하여 사용자 간의 정보 공유를 촉진하고 인센티브를 제공하는 혁신적인 서비스로, 사용자 참여와 만족도를 크게 향상시키며, 업계에서 높은 평가를 받았습니다.",
        place: "특허",
        year: "2021",
      },
      {
        role: "기본소득 (블록체인 기반 리워드 앱)",
        desc: "사용자 활동을 기반으로 투명하게 리워드를 배분하는 시스템을 구축하여, 사용자 참여를 독려하고 지속 가능한 생태계를 만들어내는 데 기여했습니다.",
        place: "iOS, Android",
        year: "2024",
      },
      {
        role: "HERE (메타버스 기반 SNS)",
        desc: "이 앱은 실시간 위치 기반의 소셜 네트워킹 서비스를 메타버스와 통합하여, 사용자들이 가상 세계에서 실시간으로 상호 작용하고 새로운 경험을 할 수 있게 했습니다.",
        place: "iOS, Android",
        year: "2023",
      },
      {
        role: "포레거시 (온라인 추모 서비스)",
        desc: "사랑하는 사람을 기리기 위한 디지털 추모 공간을 제공하며, 사용자에게 감동적이고 존중받는 경험을 제공하고자 개발된 서비스입니다.",
        place: "iOS, Android",
        year: "2023",
      },
      {
        role: "StepUp (성장형 만보기)",
        desc: "이 건강 지향 앱은 일상적인 걷기 활동을 게임화하여 사용자의 건강 증진을 촉진하고, 일상적인 운동에 대한 동기를 부여합니다.",
        place: "iOS, Android",
        year: "2023",
      },
    ],
  },
];
