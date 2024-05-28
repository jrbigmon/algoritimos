import { pipeline } from "stream/promises";
import { Transform } from "stream";
import { resolve } from "path";
import { createReadStream, createWriteStream } from "fs";
import { Sequelize } from "sequelize";
import * as csv from "csvtojson";
import { InventoryInCSV } from "../../utils/types";

export const RemoveItemForCompanies = async (
  sequelize?: Sequelize,
  company?: { name: string; id: number }
) => {
  const readStream = createReadStream(
    resolve(
      "src",
      "files",
      "shipeezi-iso-list-with-gosselin-changes-clean(v02.05.24).csv"
    )
  );

  const pipeCsvToJSON = csv.default({ delimiter: "," }, { objectMode: true });

  const writeStream = createWriteStream(
    resolve("src", "files", "inventory-iso-codes.json")
  );

  let isFirstLine = true;

  const pipeFormat = new Transform({
    objectMode: true,
    transform(inventory: InventoryInCSV, _, callback) {
      if (isFirstLine) {
        writeStream.write("[\n");
        isFirstLine = false;
      } else {
        writeStream.write(",\n");
      }

      writeStream.write(JSON.stringify({ code: inventory.code }), callback);
    },
    flush(callback) {
      writeStream.write("\n]\n");
      callback();
    },
  });

  try {
    await pipeline(readStream, pipeCsvToJSON, pipeFormat);

    writeStream.end();
  } catch (error) {
    console.log("Error delete inventories: ", error);
    throw error;
  }
};

