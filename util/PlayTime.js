export function formatPlayTime(status) {
  return formatTime(status.positionMillis) + '/' + formatTime(status.durationMillis);
}

function formatTime(mills) {
  const secs = parseInt(mills/1000);
  const mins = parseInt(secs/60);
  const remainSecs = secs - mins * 60;
  return ('0' + mins).slice(-2) + ':' + ('0' + remainSecs).slice(-2);
}
