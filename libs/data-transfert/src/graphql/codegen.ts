import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql', // API NestJS
  documents: ['libs/data-transfert/src/graphql/**/*.graphql'],
  generates: {
    'libs/data-transfert/src/graphql/generated/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true, // ✅ active la génération des hooks
        withHOC: false,
        withComponent: false,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
export default config;
