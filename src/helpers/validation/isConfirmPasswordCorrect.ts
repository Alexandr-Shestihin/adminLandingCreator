export function isConfirmPasswordCorrect(newPassword: string, oldPassword: string) {
    return newPassword === oldPassword ? '' : 'Password not match';
}