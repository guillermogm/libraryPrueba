"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favourite1719906524584 = void 0;
const typeorm_1 = require("typeorm");
class Favourite1719906524584 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "favourites",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "book_id",
                        type: "int",
                    },
                ],
                foreignKeys: [{
                        columnNames: ['user_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id']
                    },
                    { columnNames: ['book_id'],
                        referencedTableName: 'books',
                        referencedColumnNames: ['id']
                    }],
                uniques: [
                    new typeorm_1.TableUnique({
                        name: "user_book_unique",
                        columnNames: ["user_id", "book_id"],
                    }),
                ],
            }), true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('favourites');
        });
    }
}
exports.Favourite1719906524584 = Favourite1719906524584;
