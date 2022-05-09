import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const RadioGroup = ({ row }) => {
  const [radioSelected, setRadioSelected] = useState(row.Actions);
  const onValueChange = (e) => {
    setRadioSelected(e.target.value);
  };
  return (
    <FormGroup check>
      <div className="d-flex justify-content-around">
        <Label check>
          <Input
            type="radio"
            name={row.Tags}
            value="HA Action"
            checked={radioSelected === "HA Action"}
            onChange={onValueChange}
          />
          HA Action
        </Label>
        <Label check>
          <Input
            type="radio"
            name={row.Tags}
            value="No Action"
            checked={radioSelected === "No Action"}
            onChange={onValueChange}
          />
          No Action
        </Label>
        <Label check>
          <Input
            type="radio"
            name={row.Tags}
            value="Fixed String"
            checked={radioSelected === "Fixed String"}
            onChange={onValueChange}
          />
          Fixed String
        </Label>
      </div>
    </FormGroup>
  );
};

const RadioGroupFormatter = (cell, row) => (
  <RadioGroup id={row.id} cell={cell} row={row} />
);

export const folders = [
  {
    Tags: "AccessionNumber",
    Actions: "HA Action",
    "Custom Text": "1234",
  },
  {
    Tags: "AcquisitionComments",
    Actions: "No Action",
    "Custom Text": "1rynnc",
  },
  {
    Tags: "AcquisitionContextSeq",
    Actions: "Fixed String",
    "Custom Text": "fkfyo1",
  },
  {
    Tags: "AcquisitionDate",
    Actions: "",
    "Custom Text": "05/06/2021",
  },
  {
    Tags: "AcquisitionDatetime",
    Actions: "",
    "Custom Text": "4:12",
  },
  {
    Tags: "AcquisitionDeviceProcessingDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AcquisitionProtocolDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AcquisitionTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ActualHumanPerformersSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AdditionalPatientHistory",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AdmissionID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AdmittingDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AdmittingDiagnosesCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AdmittingDiagnosesDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AdmittingTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Allergies",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Arbitrary",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "AuthorObserverSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "BlockOwner",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "BodyPartExamined",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "BranchOfService",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "BurnedInAnnotation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CassetteID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CommentsOnPPS",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ConcatenationUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ConfidentialityPatientData",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContentCreatorsIdCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContentCreatorsName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContentDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContentSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContentTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContextGroupExtensionCreatorUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContrastBolusAgent",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ContributionDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CountryOfResidence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CreatorVersionUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CurrentPatientLocation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CurveDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "curves",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CurveTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "CustodialOrganizationSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DataSetTrailingPadding",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DateofLastCalibration",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DateofLastDetectorCalibration",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DateOfSecondaryCapture",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DeIdentificationMethod",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DeIdentificationMethodCodeSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DerivationDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DetectorID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DeviceSerialNumber",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DeviceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DigitalSignaturesSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DigitalSignatureUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DimensionOrganizationUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DischargeDiagnosisDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DistributionAddress",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DistributionName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "DoseReferenceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "EthnicGroup",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "FailedSOPInstanceUIDList",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "FiducialUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "FillerOrderNumber",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "FrameComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "FrameOfReferenceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "GantryID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "GeneratorID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "GraphicAnnotationSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "HumanPerformersName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "HumanPerformersOrganization",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IconImageSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IdentifyingComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ImageComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ImagePresentationComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ImagingServiceRequestComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Impressions",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InstanceCreationDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InstanceCreatorUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InstitutionAddress",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InstitutionalDepartmentName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InstitutionCodeSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InstitutionName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InsurancePlanIdentification",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IntendedRecipientsOfResultsIDSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationApproverSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationAuthor",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationDiagnosisDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationIdIssuer",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationRecorder",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationText",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "InterpretationTranscriber",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IrradiationEventUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IssuerOfAdmissionID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IssuerOfPatientID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "IssuerOfServiceEpisodeId",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "LargePaletteColorLUTUid",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "LastMenstrualDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "LongitudinalTemporalInformationModified",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "MAC",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Manufacturer",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ManufacturerModelName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "MedicalAlerts",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "MedicalRecordLocator",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "MilitaryRank",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ModifiedAttributesSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ModifiedImageDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ModifyingDeviceID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ModifyingDeviceManufacturer",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "NameOfPhysicianReadingStudy",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "NamesOfIntendedRecipientsOfResults",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Occupation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OperatorName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OperatorsIdentificationSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OrderCallbackPhoneNumber",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OrderEnteredBy",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OrderEntererLocation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OriginalAttributesSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OtherPatientIDs",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OtherPatientIDsSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OtherPatientNames",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OverlayDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "overlays",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "OverlayTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PaletteColorLUTUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ParticipantSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientAddress",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientAge",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientBirthDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientBirthName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientBirthTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientIdentityRemoved",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientInstitutionResidence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientInsurancePlanCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientMotherBirthName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientPhoneNumbers",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientPrimaryLanguageCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientPrimaryLanguageModifierCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientReligiousPreference",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientSex",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientSexNeutered",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientSize",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientState",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientTransportArrangements",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PatientWeight",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformedLocation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformedStationAET",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformedStationGeoLocCodeSeq",
    Actions: "",
    "Custom Text": "",
  },

  {
    Tags: "PerformedStationName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformedStationNameCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformingPhysicianIdSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformingPhysicianName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PerformProcedureStepEndDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PersonAddress",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PersonIdCodeSequence",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "PersonName", Actions: "", "Custom Text": "" },
  {
    Tags: "PersonTelephoneNumbers",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PhysicianApprovingInterpretation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PhysicianOfRecord",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PhysicianOfRecordIdSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PhysicianReadingStudyIdSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PlaceOrderNumberOfImagingServiceReq",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "PlateID", Actions: "", "Custom Text": "" },
  {
    Tags: "PPSDescription",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "PPSID", Actions: "", "Custom Text": "" },
  {
    Tags: "PPSStartDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PPSStartTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PregnancyStatus",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "PreMedication",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "privategroups",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ProjectName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ProtocolName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Radiopharmaceutical Information Sequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Radiopharmaceutical Start DateTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "Radiopharmaceutical Stop DateTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReasonForImagingServiceRequest",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReasonforStudy",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefDigitalSignatureSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReferencedFrameOfReferenceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReferencedPatientAliasSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReferringPhysicianAddress",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReferringPhysicianName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReferringPhysicianPhoneNumbers",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReferringPhysiciansIDSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefGenPurposeSchedProcStepTransUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefImageSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefPatientSeq",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "RefPPSSeq", Actions: "", "Custom Text": "" },
  {
    Tags: "RefSOPClassUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefSOPInstanceMACSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefSOPInstanceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RefStudySeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RegionOfResidence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RelatedFrameOfReferenceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestAttributesSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestedContrastAgent",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestedProcedureComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestedProcedureDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestedProcedureID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestedProcedureLocation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestingPhysician",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "RequestingService",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ResponsibleOrganization",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ResponsiblePerson",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ResultComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ResultsDistributionListSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ResultsIDIssuer",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ReviewerName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledHumanPerformersSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledPatientInstitutionResidence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledPerformingPhysicianIDSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledPerformingPhysicianName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStationAET",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStationGeographicLocCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStationName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStationNameCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStudyLocation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStudyLocationAET",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ScheduledStudyStartDate",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "SeriesDate", Actions: "", "Custom Text": "" },
  {
    Tags: "SeriesDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SeriesInstanceUID",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "SeriesTime", Actions: "", "Custom Text": "" },
  {
    Tags: "ServiceEpisodeDescription",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "ServiceEpisodeID",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "SiteID", Actions: "", "Custom Text": "" },
  { Tags: "SiteName", Actions: "", "Custom Text": "" },
  {
    Tags: "SmokingStatus",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SoftwareVersion",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SOPInstanceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SourceImageSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SpecialNeeds",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SPSDescription",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "SPSEndDate", Actions: "", "Custom Text": "" },
  { Tags: "SPSEndTime", Actions: "", "Custom Text": "" },
  {
    Tags: "SPSLocation",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SPSStartDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "SPSStartTime",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StationName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StorageMediaFilesetUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StructureSetDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StudyArrivalDate",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StudyComments",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StudyCompletionDate",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "StudyDate", Actions: "", "Custom Text": "" },
  {
    Tags: "StudyDescription",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "StudyID", Actions: "", "Custom Text": "" },
  {
    Tags: "StudyIDIssuer",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "StudyInstanceUID",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "StudyTime", Actions: "", "Custom Text": "" },
  {
    Tags: "SynchronizationFrameOfReferenceUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "TemplateExtensionCreatorUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "TemplateExtensionOrganizationUID",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "TextComments",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "TextString", Actions: "", "Custom Text": "" },
  {
    Tags: "TimezoneOffsetFromUTC",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "TopicAuthor",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "TopicKeyWords",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "TopicSubject",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "TopicTitle", Actions: "", "Custom Text": "" },
  {
    Tags: "TransactionUID",
    Actions: "",
    "Custom Text": "",
  },
  { Tags: "TrialName", Actions: "", "Custom Text": "" },
  { Tags: "UID", Actions: "", "Custom Text": "" },
  {
    Tags: "unspecifiedelements",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "VerifyingObserverIdentificationCodeSeq",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "VerifyingObserverName",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "VerifyingObserverSequence",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "VerifyingOrganization",
    Actions: "",
    "Custom Text": "",
  },
  {
    Tags: "VisitComments",
    Actions: "",
    "Custom Text": "",
  },
];

export const columns = [
  {
    dataField: "Tags",
    text: "Tags",
    editable: false,
  },
  {
    dataField: "Actions",
    text: "Actions",
    editable: false,
    formatter: RadioGroupFormatter,
    // editorRenderer: (
    //   editorProps,
    //   value,
    //   row,
    //   column,
    //   rowIndex,
    //   columnIndex
    // ) => <RadioGroup {...editorProps} value={value} />,
  },
  {
    dataField: "Custom Text",
    text: "Custom Text",
  },
];
