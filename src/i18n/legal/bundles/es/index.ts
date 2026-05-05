import type { LegalBundle } from "../../types";
import { privacyEs } from "./privacy";
import { termsEs } from "./terms";
import { deleteAccountEs } from "./delete-account";
import { deleteDataEs } from "./delete-data";
import { supportEs } from "./support";

export const legalBundleEs: LegalBundle = {
  privacy: privacyEs,
  terms: termsEs,
  deleteAccount: deleteAccountEs,
  deleteData: deleteDataEs,
  support: supportEs,
};
