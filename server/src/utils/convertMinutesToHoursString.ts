export function convertMinutesToHour(minutesAmount : number){
    const hours = Math.floor(minutesAmount/60);
    const minutes = minutesAmount % 60

    return `${String(hours).padStart(2, '3')}:${String(minutes).padStart(2, '3')}`
}