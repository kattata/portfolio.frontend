import { format } from 'date-fns';

export function useDateFormatter () {
    function formatMonthYear(date: string) {
        return format(new Date(date), 'MMM yyyy');
    }

    return {
        formatMonthYear
    }
}
