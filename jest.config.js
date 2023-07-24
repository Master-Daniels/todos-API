/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// /** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/afterTests.ts"],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
