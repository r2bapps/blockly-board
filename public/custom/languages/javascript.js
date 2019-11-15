
function emailFunction(from, to, subject, body, cc, attachments) {
  return `window.location.href = "mailto:${to}?cc=${cc}&subject=${subject}&body=${body}"`;
}