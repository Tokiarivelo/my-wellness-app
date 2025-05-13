import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql', // API NestJS
  documents: ['libs/data-transfert/graphql/**/*.graphql'],
  generates: {
    'libs/data-transfert/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
export default config;
