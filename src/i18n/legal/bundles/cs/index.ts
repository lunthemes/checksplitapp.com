import type { LegalBundle } from "../../types";
import { privacyCs } from "./privacy";
import { termsCs } from "./terms";
import { deleteAccountCs } from "./delete-account";
import { deleteDataCs } from "./delete-data";
import { supportCs } from "./support";

export const legalBundleCs: LegalBundle = {
  privacy: privacyCs,
  terms: termsCs,
  deleteAccount: deleteAccountCs,
  deleteData: deleteDataCs,
  support: supportCs,
};
