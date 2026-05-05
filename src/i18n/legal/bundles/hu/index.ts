import type { LegalBundle } from "../../types";
import { privacyHu } from "./privacy";
import { termsHu } from "./terms";
import { deleteAccountHu } from "./delete-account";
import { deleteDataHu } from "./delete-data";
import { supportHu } from "./support";

export const legalBundleHu: LegalBundle = {
  privacy: privacyHu,
  terms: termsHu,
  deleteAccount: deleteAccountHu,
  deleteData: deleteDataHu,
  support: supportHu,
};
