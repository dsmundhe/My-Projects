export const initialName = (name) => {
    if (!name) return "";
    let words = name.split(" ");
    let initials ='';
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }
    return initials.toLocaleUpperCase();
}