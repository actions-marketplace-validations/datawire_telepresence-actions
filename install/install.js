const install = require('../src/install');
const exec = require('@actions/exec')

exec.exec('/bin/bash -c', ['echo \"TELEPRESENCE_REPORT_GITHUB_ACTIONS_INTEGRATION=true\" >> $GITHUB_ENV'])
install.telepresenceInstall();
