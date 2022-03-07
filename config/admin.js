module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5e74cfdd4a25567abb4e1393f2425ab'),
  },
});
