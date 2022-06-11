module.exports = ({ env }) => ({
  host: env('HOST', env.HOST),
  port: env.int('PORT', 5003),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', env.ADMIN_JWT_SECRET),
    },
  },
});
