import C1_LegalLicenses from "./C1_LegalLicenses";
import C2_Budgeting from "./C2_Budgeting";
import C3_RealEstate from "./C3_RealEstate";
import C4_SupplyChain from "./C4_SupplyChain";
import C5_RestaurantConcept from "./C5_RestaurantConcept";

const payload = {
  sectionId: 2,
  title: "Business Development",
  chapters: [
    C1_LegalLicenses,
    C2_Budgeting,
    C3_RealEstate,
    C4_SupplyChain,
    C5_RestaurantConcept
  ]
};

export default payload;
