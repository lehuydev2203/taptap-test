const DEV = '__DEV__';

const AnimationConstants = {
  defaultDuration: 300,
  defaultDuration500: 500,
  defaultDuration750: 750,
  defaultDuration1000: 1000,
};

const Regex = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
  phoneRegex: /^\d+$/,
  passwordCharacters: 8,
  nameCharacters: 4,
  phoneNumberCharacters: 10,
  verifyLength: 4,
  number: /^SW\d{4}$/,
  ipAddress:
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  message: {
    phone: 'Error, wrong syntax phone',
    email: 'Error, wrong syntax email',
  },
};

const VersionDebug = '.0';
const VersionStaging = '.0';
const VersionProduct = '.0';

/**
 * This variable represents the type of release or environment in which the code is intended to run.
 * Possible values:
 * 1: Debug
 * 2: Staging
 * 3: Production
 */
const TypeRelease: number = 1;

const Environments = [
  {
    title: 'Development',
    version: VersionDebug,
  },
  {
    title: 'Staging',
    version: VersionStaging,
  },
  {
    title: 'Production',
    version: VersionProduct,
  },
];

const Version = () => {
  const ver = '1.0';
  const _verCode = Environments[TypeRelease].version;
  const version = ver + _verCode;

  return version + ` ${Environments[TypeRelease].title}`;
};

const App = {
  title: 'Taptap',
  versionServer: Version(),
  version: `Taptap v${Version()}`,
  type: TypeRelease,
};

export {AnimationConstants, DEV, Regex, App};
