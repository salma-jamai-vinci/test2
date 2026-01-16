export class PasswordChecker {
  isValid(password: string): boolean {
    if (password.length < 8) return false;
    
    return true;
  }
}
