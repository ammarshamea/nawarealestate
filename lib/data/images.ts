/** All brand imagery under public/images/ (WebP) */
export const brandImages = {
  skylineSunset: "images/riyadh-skyline-kingdom-centre-sunset.webp",
  aboutUs: "images/about_us.webp",
  residentialStreet: "images/luxury-residential-street-riyadh-sunset.webp",
  resortEntrance: "images/luxury-resort-entrance-kingdom-centre.webp",
  familyCommunity: "images/saudi-family-luxury-community-riyadh.webp",
  buildLifestyles: "images/build-lifestyles-luxury-community-riyadh.webp",
  architecturalBlueprint: "images/riyadh-skyline-architectural-blueprint.webp",
  residentialWalkway: "images/luxury-residential-walkway-sunset.webp",
  developmentOffice: "images/real-estate-development-office-riyadh.webp",
  urbanPlaza: "images/modern-urban-plaza-riyadh-sunset.webp",
  investmentTerrace: "images/investment-value-luxury-terrace-riyadh.webp",
  partnershipsMeeting: "images/nawa-partnerships-meeting-architectural-model.webp",
  vision: "images/vision.webp",
  mission: "images/mission.webp",
  vision2030: "images/vision_2030.webp",
} as const;

export type BrandImageKey = keyof typeof brandImages;
