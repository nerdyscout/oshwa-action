# OSHWA Action

> A GitHub Action to make a web request to [API](https://certificationapi.oshwa.org/documentation) of [OSHWA](https://www.oshwa.org/). Supports currently only POST to project endpoint.

[![Test Status](github.com/nerdyscout/oshwa-action/workflows/Test/badge.svg)](github.com/nerdyscout/oshwa-action/actions)
![Release](https://img.shields.io/github/v/release/nerdyscout/oshwa-action)

## Usage

### post project

```yaml
uses: nerdyscout/oshwa-action@master
with:
  token: ${{ secrets.GITHUB_TOKEN }}
  responsiblePartyType: "Individual"
  responsibleParty: $GITHUB_REPOSITORY_OWNER
  bindingParty: $GITHUB_REPOSITORY_OWNER
  country:
  projectName: $GITHUB_REPOSITORY_NAME
  projectWebsite: $GITHUB_REPOSITORY_OWNER "github.io" $GITHUB_REPOSITORY_NAME 
  projectVersion: $GITHUB_REF_NAME
#  previousVersions: ["US000000","US000001"]
  projectDescription:
  primaryType: "Electronics"
  documentationUrl: "https://github.com/" $GITHUB_REPOSITORY "/docs/"
  hardwareLicense: "CERN"
  softwareLicense: "GPL"
  documentationLicense: "CC BY"
  noCommercialRestriction: true
  explanationNcr: ""
  noDocumentationRestriction: true
  explanationNdr: ""
  openHardwareComponents: true
  explanationOhwc: ""
  creatorContribution: true
  explanationCcr: ""
  noUseRestriction: true
  explanationNur: ""
  redistributedWork: true
  explanationRwr: ""
  noSpecificProduct: true
  explanationNsp: ""
  noComponentRestriction: true
  explanationNor: ""
  technologyNeutral: true
  explanationTn: ""
  CertificationMarkTerms: {"accurateContactInformation":{},"complianceWithOfficialCertificationGuidelines": {},"oshwaCertificationMark": {},"violationsEnforcement": {},"responsibility": {"term": "I have the ability to bind those responsible for the certified item to this agreement.","agreement": true}}
  explanationCertificationTerms: ""
  relationship: "self"
  agreementTerms: true
  parentName: $GITHUB_REPOSITORY_OWNER
```

## Inputs

| Parameter                       | Required | Description                                                                        |
| ------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| `token`                         | `true`   | OSHWA API Key                                                                      |
| `responsiblePartyType`          | `true`   | Responsible party type. Must be either "Individual", "Company", or "Organization". |
| `responsibleParty`              | `true`   | Name of Individual, Company, or Organization Responsible for the Certified Item.   |
| `bindingParty`                  | `true`   | If not an Individual, name of Individual with Authority to Bind the Company or Organization. Required only if responsiblePartyType is not "Individual". |
| `country`                       | `true`   |                                                                                    |
| `streetAddress1`                | `false`  |                                                                                    |
| `streetAddress2`                | `false`  |                                                                                    |
| `city`                          | `false`  |                                                                                    |
| `state`                         | `false`  |                                                                                    |
| `postalCode`                    | `false`  |                                                                                    |
| `privateContact`                | `false`  |                                                                                    |
| `publicContact`                 | `false`  |                                                                                    |
| `projectName`                   | `true`   |                                                                                    |
| `projectWebsite`                | `false`  |                                                                                    |
| `projectVersion`                | `false`  |                                                                                    |
| `previousVersions`              | `false`  | An array of OSHWA UIDs                                                             |
| `projectDescription`            | `false`  |                                                                                    |
| `primaryType`                   | `true`   | Primary project type.                                                              |
| `additionalType`                | `false`  | Additional project types.                                                          |
| `projectKeywords`               | `false`  | Additional searchable keywords                                                     |
| `citation`                      | `false`  | If the project incorporates or builds upon other open projects that are not currently certified by OSHWA, this field can be used to cite those projects. |
| `documentationUrl`              | `false`  | URL for project documentation                                                      | 
| `availableFileFormat`           | `false`  | All project documentation and design files are available in the preferred format for making changes. |
| `hardwareLicense`               | `true`   |                                                                                    |
| `softwareLicense`               | `true`   |                                                                                    |
| `documentationLicense`          | `true`   |                                                                                    |
| `noCommercialRestriction`       | `true`   | The project is licensed in a way to allow for modifications and derivative works without commercial restriction. |
| `explanationNcr`                | `true`   | Explanation is required if `noCommercialRestriction` is false.                       |
| `noDocumentationRestriction`    | `true`   | There is no restriction within my control to selling or giving away the project documentation. |
| `explanationNdr`                | `true`   | Explanation is required if `noDocumentationRestriction` is false.                    |
| `openHardwareComponents`        | `true`   | Where possible, I have chosen to use components in my hardware that are openly licensed. |
| `explanationOhwc`               | `true`   | Explanation is required if `openHardwareComponents` is false.                        |
| `creatorContribution`           | `true`   | I understand and comply with the "Creator Contribution requirement," explained in the Requirements for Certification |
| `explanationCcr`                | `true`   | Explanation is required if `creatorContribution` is false.                           |
| `noUseRestriction`              | `true`   | There is no restriction on the use by persons or groups, or by the field of endeavor. |
| `explanationNur`                | `true`   | Explanation is required if `noUseRestriction` is false.                              |
| `redistributedWork`             | `true`   | The rights granted by any license on the project applies to all whom the work is redistributed to. |
| `explanationRwr`                | `true`   | Explanation is required if `redistributedWork` is false.                             |
| `noSpecificProduct`             | `true`   | The rights granted under any license on the project do not depend on the licensed work being part of a specific product. |
| `explanationNsp`                | `true`   | Explanation is required if `noSpecificProduct` is false.                             |
| `noComponentRestriction`        | `true`   | The rights granted under any license on the project do not restrict other hardware or software, for example by |
| `explanationNor`                | `true`   | Explanation is required if `noComponentRestriction` is false.                        |
| `technologyNeutral`             | `true`   | The rights granted under any license on the project are technology neutral.        |
| `explanationTn`                 | `true`   | Explanation is required if `technologyNeutral` is false.                             |
| `CertificationMarkTerms`        | `true`   | Certification Mark Terms                                                           |
| `explanationCertificationTerms` | `true`   | Explanation for certification mark terms                                           |
| `relationship`                  | `true`   |                                                                                    |
| `agreementTerms`                | `true`   | Agreement to terms                                                                 |
| `parentName`                    | `true`   | Parent name                                                                        |

## Outputs

Output format: `JSON`

```json
  { "success": true}
```

## License

[MIT](LICENSE)
