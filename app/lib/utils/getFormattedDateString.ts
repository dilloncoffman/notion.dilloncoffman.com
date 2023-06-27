export default function (date: Date | null): string {
    if (!date) return ''
    
    return `${date?.getUTCDate()} ${date?.toLocaleString(
        "default",
        {
          month: "long",
        }
      )}, ${date?.getFullYear()}`
}