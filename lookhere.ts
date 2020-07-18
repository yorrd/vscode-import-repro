// remove this import and re-import.
import { testExport } from "imports/git_modules/testmodule/index";
// what I expect:
// import { testExport } from '@adornis/testmodule/index'

console.log(testExport);
