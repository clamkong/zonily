import C1_OrgChart from "./C1_OrgChart";
import C2_Partnerships from "./C2_Partnerships";
import C3_EmployeeMonitoring from "./C3_EmployeeMonitoring";
import C4_Proccesses from "./C4_Proccesses";


const payload = {
  sectionId: 4,
  title: "Personnel",
  chapters: [C1_OrgChart, C2_Partnerships, C3_EmployeeMonitoring, C4_Proccesses]
};

export default payload;
