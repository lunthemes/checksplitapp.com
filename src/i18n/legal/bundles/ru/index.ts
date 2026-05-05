import type { LegalBundle } from "../../types";
import { privacyRu } from "./privacy";
import { termsRu } from "./terms";
import { deleteAccountRu } from "./delete-account";
import { deleteDataRu } from "./delete-data";
import { supportRu } from "./support";

export const legalBundleRu: LegalBundle = {
  privacy: privacyRu,
  terms: termsRu,
  deleteAccount: deleteAccountRu,
  deleteData: deleteDataRu,
  support: supportRu,
};
