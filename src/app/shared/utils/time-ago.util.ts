export function formatTimeAgo(ISOString: string): string {
    const createdAt = new Date(ISOString);

    const diffMs = Date.now() - createdAt.getTime();
    const seconds = Math.floor(diffMs/1000);

    if (seconds < 60)
        return "Just Now";

    const minutes = Math.floor(seconds/60);

    if (minutes < 60)
        return `${minutes} mins ago`;

    const hours = Math.floor(minutes/60);

    if (hours < 24)
        return `${hours} hrs ago`;

    if (hours < 48)
        return "Yesterday";

    const days = Math.floor(hours/24);

    if (days < 7)
        return `{days} days ago`;

    return new Date(ISOString).toLocaleDateString();
}