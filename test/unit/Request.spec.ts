import {expect} from 'chai';
import { Request } from "../../src/Request";

const params = {
  slaName: "03Routine_I",
  customerId: "alanc",
  fileAttachment: {
    fileName: "test.txt",
    fileData: "abcdefg",
    mimeType: "text"
  },
  additionalCallValues: {
    opencall: {
      itsm_title: "test",
      itsm_sladef: "sla",
      itsm_urgency_level: "Low",
      itsm_impact_level: "Low",
      status: 2,
      companyname: "EXT",
      fk_company_id: "EXT",
      site: "EXT"
    },
    updatedb: {
      updatetxt: "blah blah blah"
    }
  }
};
const request = new Request("helpdesk", "logAndAssignNewCall", params, [
  "incomingCallref",
  "callClass",
  "slaName",
  "customerId",
  "customerName",
  "assetId",
  "costCenter",
  "probCode",
  "site",
  "condition",
  "logDate",
  "groupId",
  "analystId",
  "timeSpent",
  "updateMessage",
  "updateCode",
  "updateSource",
  "forceAssignment",
  "fileAttachment",
  "serverFileAttachment",
  "additionalCallValues"
]);

describe('make sure that request class works correctly', () => {
    it('should correctly order results', () => {
        console.log(request.xmlmc.toString())
    })
})