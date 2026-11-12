import test from 'node:test';
import assert from 'node:assert/strict';
import { routePrimaryDisabled, routePrimaryLabel, routePrimaryMode, stopsMatch } from '../src/route-ui.mjs';

test('route primary button label switches between plan and start', () => {
  assert.equal(routePrimaryLabel({ busy: false, running: false, paused: false, completed: false, hasPlan: false, stopCount: 1 }), 'Plan road route');
  assert.equal(routePrimaryLabel({ busy: false, running: false, paused: false, completed: false, hasPlan: false, stopCount: 2 }), 'Plan road route');
  assert.equal(routePrimaryLabel({ busy: false, running: false, paused: false, completed: false, hasPlan: true, stopCount: 2, speedMph: 25 }), 'Start route · 25 mph');
  assert.equal(routePrimaryLabel({ busy: false, running: true, paused: false, completed: false, hasPlan: true, stopCount: 2 }), 'Pause route');
  assert.equal(routePrimaryLabel({ busy: false, running: false, paused: true, completed: false, hasPlan: true, stopCount: 2, speedMph: 65 }), 'Resume route · 65 mph');
});

test('route primary button mode and disabled state follow planning and playback', () => {
  assert.equal(routePrimaryMode({ active: false, running: false, paused: false, completed: false, hasPlan: false, stopCount: 2 }), 'plan');
  assert.equal(routePrimaryMode({ active: false, running: false, paused: false, completed: false, hasPlan: true, stopCount: 2 }), 'start');
  assert.equal(routePrimaryDisabled({
    busy: false, active: false, running: false, paused: false, device: { state: 'ready' }, otherSession: false, hasPlan: false, stopCount: 1, deviceReady: true,
  }), true);
  assert.equal(routePrimaryDisabled({
    busy: false, active: false, running: false, paused: false, device: { state: 'ready' }, otherSession: false, hasPlan: true, stopCount: 2, deviceReady: true,
  }), false);
  assert.equal(routePrimaryDisabled({
    busy: false, active: true, running: false, paused: true, device: { state: 'ready' }, otherSession: false, hasPlan: true, stopCount: 2, deviceReady: true,
  }), false);
});

test('stopsMatch compares coordinates within one metre', () => {
  assert.equal(stopsMatch({ latitude: 41.88, longitude: -87.62 }, { latitude: 41.8800004, longitude: -87.6199996 }), true);
  assert.equal(stopsMatch({ latitude: 41.88, longitude: -87.62 }, { latitude: 41.881, longitude: -87.62 }), false);
});
