/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Jaideep:2Im0GgMjHAbK@ep-lively-tree-a12sr9az-pooler.ap-southeast-1.aws.neon.tech/devloper?sslmode=require',
    }
  };