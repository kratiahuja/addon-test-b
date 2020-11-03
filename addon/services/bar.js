import Service from '@ember/service';

export default class BarService extends Service {
  barFuncChanged() {
    console.log('Bar function from addon-test-b');
  }

  newFunc() {
    console.log('New function from addon-test-b');
  }
}
