import Service from '@ember/service';

export default class BarService extends Service {
  barFunc() {
    console.log('Bar function from addon-test-b');
  }

  bazFunc() {
    console.log('Baz function from addon-test-b');
  }
}
