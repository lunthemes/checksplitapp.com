import type { LegalBundle } from "../../types";
import { privacyDe } from "./privacy";
import { termsDe } from "./terms";
import { deleteAccountDe } from "./delete-account";
import { deleteDataDe } from "./delete-data";
import { supportDe } from "./support";

export const legalBundleDe: LegalBundle = {
  privacy: privacyDe,
  terms: termsDe,
  deleteAccount: deleteAccountDe,
  deleteData: deleteDataDe,
  support: supportDe,
};
