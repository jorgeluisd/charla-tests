module.exports = {
  verbose: true,
  testEnvironment: 'jsdom', // Por defecto es node, jsdom es para web app
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/*.{js,jsx,ts,tsx}',
    '!src/app/**/index.{js,jsx,ts,tsx}',
    '!src/app/**/interface.ts',
    '!src/app/**/declaration.d.ts',
    '!src/app/styles/**/*',
    '!src/app/assets/**/*',
    '!src/app/test/**/*',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    // './src/components/': {
    //   branches: 40,
    //   statements: 40,
    // },
  },
  transform: { // Transforma el código fuente antes de ejecutarlo. Es esencial para proyectos que usan Babel.
    '^.+\\.[t|j]sx?$': '@swc/jest',
    '^.+\\.[t|j]s?$': '@swc/jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    // '/node_modules/(?!(@external/library)).+\\.(jsx?|js?)$',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // Una regex que define qué archivos se considerarán archivos de prueba para Jest.
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Las extensiones de archivo que Jest reconocerá.
  moduleDirectories: ['node_modules', 'src'], // especifica los directorios donde Jest buscará módulos.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
