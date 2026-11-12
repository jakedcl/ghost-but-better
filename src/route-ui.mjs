export function stopsMatch(a, b) {
  if (!a || !b) return false;
  return Math.abs(a.latitude - b.latitude) < 0.000001 && Math.abs(a.longitude - b.longitude) < 0.000001;
}

export function routePrimaryLabel({ busy, running, paused, completed, hasPlan, stopCount, speedMph = 45 }) {
  if (busy) return 'Working…';
  if (running) return 'Pause route';
  if (paused) return `Resume route · ${speedMph} mph`;
  if (completed) return 'Route completed';
  if (!hasPlan && stopCount >= 2) return 'Plan road route';
  if (hasPlan) return `Start route · ${speedMph} mph`;
  return 'Plan road route';
}

export function routePrimaryDisabled({
  busy, active, running, paused, device, otherSession, hasPlan, stopCount, deviceReady,
}) {
  if (busy) return true;
  if (active) {
    return !running && (!paused || !device || otherSession || !['ready', 'setup-required'].includes(device?.state));
  }
  if (!hasPlan) return stopCount < 2 || Boolean(otherSession);
  return device?.state !== 'ready' || Boolean(otherSession);
}

export function routePrimaryMode({ active, running, paused, completed, hasPlan, stopCount }) {
  if (running) return 'pause';
  if (paused) return 'resume';
  if (completed) return 'completed';
  if (!hasPlan && stopCount >= 2) return 'plan';
  if (hasPlan) return 'start';
  return 'plan';
}
