const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const dosmi_backend = [
  ...common,
  'tests/apps/dosmi/backend/features/**/*.feature',
  '--require tests/apps/dosmi/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
   dosmi_backend
};
