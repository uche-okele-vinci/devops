function emailValidator(email) {

  if (typeof email !== 'string') return false;

  if (email.includes(' ')) return false;

  const parts = email.split('@');
  if (parts.length !== 2 || !parts[0] || !parts[1]) return false;

  const domain = parts[1];
  if (!domain.includes('.') || domain.endsWith('.')) return false;
  
  return true;
}

module.exports = emailValidator;
