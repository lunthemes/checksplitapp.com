import type { LegalBundle } from "../../types";
import { privacyFr } from "./privacy";
import { termsFr } from "./terms";
import { deleteAccountFr } from "./delete-account";
import { deleteDataFr } from "./delete-data";
import { supportFr } from "./support";

export const legalBundleFr: LegalBundle = {
  privacy: privacyFr,
  terms: termsFr,
  deleteAccount: deleteAccountFr,
  deleteData: deleteDataFr,
  support: supportFr,
};
