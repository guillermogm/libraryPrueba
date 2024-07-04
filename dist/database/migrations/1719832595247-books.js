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
exports.Books1719832595247 = void 0;
const typeorm_1 = require("typeorm");
class Books1719832595247 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "70",
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "author_id",
                        type: "int",
                    },
                ],
                foreignKeys: [{
                        columnNames: ['author_id'],
                        referencedTableName: 'authors',
                        referencedColumnNames: ['id']
                    }]
            }), true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('books');
        });
    }
}
exports.Books1719832595247 = Books1719832595247;
