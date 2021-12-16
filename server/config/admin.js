module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2cfa2ad8e2fbe51944c9e86612d0f54c'),
  },
});
