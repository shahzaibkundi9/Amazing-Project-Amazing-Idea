// Roman Urdu: Creds update hotay hi save karo taake logout na ho

import fs from "fs";

export const saveSession = async (data: any) => {
  fs.writeFileSync("sessions/creds.json", JSON.stringify(data));
};
