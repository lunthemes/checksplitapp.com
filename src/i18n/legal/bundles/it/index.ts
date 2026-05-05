import type { LegalBundle } from "../../types";
import { privacyIt } from "./privacy";
import { termsIt } from "./terms";
import { deleteAccountIt } from "./delete-account";
import { deleteDataIt } from "./delete-data";
import { supportIt } from "./support";

export const legalBundleIt: LegalBundle = {
  privacy: privacyIt,
  terms: termsIt,
  deleteAccount: deleteAccountIt,
  deleteData: deleteDataIt,
  support: supportIt,
};
