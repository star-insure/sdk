/**
 * Calculate someone's age from a date of birth.
 */
 export function calculateAge(date: string|Date|null|undefined): number {
    if (!date) {
        return 0;
    }

    try {
        const today = new Date();

        const birthDate = new Date(date);

        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }

        return age;
    } catch (error) {
        console.error(error);
        return 0;
    }
}
