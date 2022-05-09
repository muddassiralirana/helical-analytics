export const firstBar = [
  {
    label: "(0008, 0060) Modality",
    value: "(0008, 0060) Modality",
    totalCount: "1700",
  },
  {
    label: "(0008, 0070) Manufacturer",
    value: "(0008, 0070) Manufacturer",
    totalCount: "5400",
  },
  {
    label: "(0010, 0040) PatientSex",
    value: "(0010, 0040) PatientSex",
    totalCount: "9200",
  },
];

export const secondBar = [
  {
    label: "(0008, 0060) Modality",
    options: [
      { id: 1, value: "CT", count: "200" },
      { id: 2, value: "MR", count: "600" },
      { id: 3, value: "PR", count: "100" },
      { id: 4, value: "SC", count: "800" },
    ],
  },
  {
    label: "(0008, 0070) Manufacturer",
    options: [
      { id: 1, value: "GE MEDICAL SYSTEMS", count: "800" },
      { id: 2, value: "OsiriX", count: "900" },
      { id: 3, value: "Philips", count: "100" },
      { id: 4, value: "SIEMENS", count: "800" },
      { id: 5, value: "TOSHIBA", count: "1000" },
      { id: 6, value: "Vital Images, Inc", count: "1800" },
    ],
  },
  {
    label: "(0010, 0040) PatientSex",
    options: [
      { id: 1, value: "Woman", count: "8200" },
      { id: 2, value: "Man", count: "1000" },
    ],
  },
];

export const columns1 = [
  {
    dataField: "value",
    text: "Select",
  },
  {
    dataField: "count",
    text: "Count",
  },
];
