import type { LegalBundle } from "../../types";
import { privacyEn } from "./privacy";
import { termsEn } from "./terms";
import { deleteAccountEn } from "./delete-account";
import { deleteDataEn } from "./delete-data";
import { supportEn } from "./support";

export const legalBundleEn: LegalBundle = {
  privacy: privacyEn,
  terms: termsEn,
  deleteAccount: deleteAccountEn,
  deleteData: deleteDataEn,
  support: supportEn,
};
