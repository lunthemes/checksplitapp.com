import type { LegalBundle } from "../../types";
import { privacyTr } from "./privacy";
import { termsTr } from "./terms";
import { deleteAccountTr } from "./delete-account";
import { deleteDataTr } from "./delete-data";
import { supportTr } from "./support";

export const legalBundleTr: LegalBundle = {
  privacy: privacyTr,
  terms: termsTr,
  deleteAccount: deleteAccountTr,
  deleteData: deleteDataTr,
  support: supportTr,
};
