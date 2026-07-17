/** All brand imagery under public/images/ */
export const brandImages = {
  skylineSunset: "images/riyadh-skyline-kingdom-centre-sunset.png",
  aboutUs: "images/about_us.png",
  residentialStreet: "images/luxury-residential-street-riyadh-sunset.png",
  resortEntrance: "images/luxury-resort-entrance-kingdom-centre.png",
  familyCommunity: "images/saudi-family-luxury-community-riyadh.png",
  buildLifestyles: "images/build-lifestyles-luxury-community-riyadh.png",
  architecturalBlueprint: "images/riyadh-skyline-architectural-blueprint.png",
  residentialWalkway: "images/luxury-residential-walkway-sunset.png",
  developmentOffice: "images/real-estate-development-office-riyadh.png",
  urbanPlaza: "images/modern-urban-plaza-riyadh-sunset.png",
  investmentTerrace: "images/investment-value-luxury-terrace-riyadh.png",
  partnershipsMeeting: "images/nawa-partnerships-meeting-architectural-model.png",
  vision: "images/vision.png",
  mission: "images/mission.png",
  vision2030: "images/vision_2030.png",
} as const;

export type BrandImageKey = keyof typeof brandImages;
