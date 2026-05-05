import type { LegalBundle } from "../../types";
import { privacyRo } from "./privacy";
import { termsRo } from "./terms";
import { deleteAccountRo } from "./delete-account";
import { deleteDataRo } from "./delete-data";
import { supportRo } from "./support";

export const legalBundleRo: LegalBundle = {
  privacy: privacyRo,
  terms: termsRo,
  deleteAccount: deleteAccountRo,
  deleteData: deleteDataRo,
  support: supportRo,
};
