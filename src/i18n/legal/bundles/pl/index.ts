import type { LegalBundle } from "../../types";
import { privacyPl } from "./privacy";
import { termsPl } from "./terms";
import { deleteAccountPl } from "./delete-account";
import { deleteDataPl } from "./delete-data";
import { supportPl } from "./support";

export const legalBundlePl: LegalBundle = {
  privacy: privacyPl,
  terms: termsPl,
  deleteAccount: deleteAccountPl,
  deleteData: deleteDataPl,
  support: supportPl,
};
